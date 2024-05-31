import { createClient } from "@supabase/supabase-js";
import * as util from './util.jsx'


const supabase = createClient("https://hgfmpwhgcuqpxzzksnak.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnZm1wd2hnY3VxcHh6emtzbmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNzIwNDUsImV4cCI6MjAzMjY0ODA0NX0.q-AGpGv5LvONEQagnhTYCR8oKMwCsmEHvW86x924U84");


export async function getCompetitions() {
	const { data } = await supabase.from("COMPETITION").select();
	console.log(data);
	return data;
}


/**
 * Insert a competition with empty datasets (before the files are uploaded).
 * Returns the competition id.
 */
export async function createCompetition(userAddr, title, shortDesc, overview, dsDesc, dappAddr, duration) {
	const { data } = await supabase.from("COMPETITION").insert({
		user_addr: userAddr,
		title: title,
		short_description: shortDesc,
		overview: overview,
		dataset_description: dsDesc,
		//test_set_url: testSet,
		//train_set_url: trainSet,
		duration: duration,
		eval_dapp_addr: dappAddr
	}).select();

	console.log(data);
	return data.data[0].id;
}

export async function updateTestset(competitionId, filePath) {
	const { data } = await supabase.from("COMPETITION")
		.update({ test_set_url: filePath }),
		.eq('id', competitionId);
}

export async function updateTestset(competitionId, filePath) {
	const { data } = await supabase.from("COMPETITION")
		.update({ train_set_url: filePath }),
		.eq('id', competitionId);
}

export async function getEvaluations(competitionId) { // filter
	// Query the list of evaluations from the DB
	const { data } = await supabase.from("EVALUATION")
		.select()
		.eq("competition_id", competitionId);

	const dealIds = data.map(d => d.deal_id);

	// Make it a dict indexed by the dealId
	const evaluations = {};
	data.forEach(d => {
		d['status'] = undefined;
		d['accuracy'] = -1.;
		evaluations[d.deal_id] = d
	});


	// Query deals status and result from TheGraph
	const query = `
	{
	  deals(where: {id_in: ["${dealIds.join('", "')}"], tasks_: {}}) {
	    id
	    tasks {
	      status
	      results
	    }
	  }
	}
	`;

	console.log(`Query: ${query}`);

	util.graphqlQuery(query).then(data => {
	  if (data) {
	    data.deals.forEach(d => {
	    	console.log(`ID: ${d.id}`);
	    	console.log(`TASKS:`, d.tasks);

	    	evaluations[d.id]['status'] = d.tasks[0].status;

	    	util.getIpfsResult(d.tasks[0].results)
	    	.then(a => {
	    		evaluations[d.id]['accuracy'] = a
	    		console.log(`Accuracy: ${a}`);
	    	})
	    	.catch(e => {
	    		console.error(`Could not download/unzip result.zip for deal [${d.id}]`);
	    	});
	    });
	  } else {
	    console.log('TheGraph: no data found');
	  }
	});

	return evaluations;
}


/**
 * Create an evaluation with a NULL deal, before the evaluation deal is created on-chain
 */
export async function createEvaluation(competitionId, modelAddr, orderHash) {
	const { data } = await supabase.from("EVALUATION").insert({
		competition_id: competitionId,
		model_addr: modelAddr
		// deal_id is NULL
	}).select();

	console.log(data);
	return data.data[0].id;
}



/**
 * Add the deal id to an evaluation, after the deal is created on-chain.
 */
export async function updateEvaluation(evaluationId, dealId) {
	const { data } = await supabase.from("EVALUATION")
		.update({deal_id: dealId})
		.eq('id', evaluationId);
}







