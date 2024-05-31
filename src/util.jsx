
import axios from 'axios';
import JSZip from 'jszip';
// Define the URL of the GraphQL endpoint
const graph_url = 'https://thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5';
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://hgfmpwhgcuqpxzzksnak.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnZm1wd2hnY3VxcHh6emtzbmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNzIwNDUsImV4cCI6MjAzMjY0ODA0NX0.q-AGpGv5LvONEQagnhTYCR8oKMwCsmEHvW86x924U84");


// Function to fetch data from the GraphQL endpoint
export async function graphqlQuery(query) {
  try {
    const response = await axios.post(graph_url, {
      query: query,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response contains data
    if (response.status === 200 && response.data) {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


const ipfs_gateway_url = 'https://ipfs-gateway.v8-bellecour.iex.ec'

function hex_to_ascii(hex)
 {
	hex = hex.toString();
	let str = '';
	for (let n = 0; n < hex.length; n += 2)
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

	return str;
 }

 async function getAsString(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


export async function downloadAndExtract(zipUrl, filePath) {
  const response = await fetch(zipUrl);
  const blob = await response.blob();

  const zip = new JSZip();
  try {
    const content = await zip.loadAsync(blob);
    const specificFile = content.files[filePath];
    if (specificFile) {
      const fileContent = await specificFile.async('text');
      return fileContent;
    } else {
      throw new Error('Specified file not found in zip');
    }
  } catch (error) {
    throw error;
  }
}


export async function getIpfsResult(result) {
	const re = /"(\/ipfs\/\w+)"/;
	const json = hex_to_ascii(result);
	const m = json.match(re);

	const url = ipfs_gateway_url + m[1];
	console.log(`Fetching url: ${url}`);

	return downloadAndExtract(url, 'result.txt');
}

/*
 * File upload to Supabase
 */
import * as tus from 'tus-js-client';
const projectId = 'hgfmpwhgcuqpxzzksnak';

/**
 * Upload a (non-iExec dataset to Supabase.
 * 
 * bucketName must be either 'test_sets' or 'train_sets'.
 */
async function uploadFile(bucketName, filename, file) {
  console.log(supabase.auth);
    // const { data: { session } } = await supabase.auth.getSession();
    // console.log(session);
    return new Promise((resolve, reject) => {
        let upload = new tus.Upload(file, {
            endpoint: `https://${projectId}.supabase.co/storage/v1/upload/resumable`,
            retryDelays: [0, 3000, 5000, 10000, 20000],
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnZm1wd2hnY3VxcHh6emtzbmFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzA3MjA0NSwiZXhwIjoyMDMyNjQ4MDQ1fQ.vNBlXPTu2hf9VV7R4AnbCDhnydPb9UYyR2j0Bl8Lafc                `,
                'x-upsert': 'true', // optionally set upsert to true to overwrite existing files
            },
            uploadDataDuringCreation: true,
            removeFingerprintOnSuccess: true, // Important if you want to allow re-uploading the same file https://github.com/tus/tus-js-client/blob/main/docs/api.md#removefingerprintonsuccess
            metadata: {
                bucketName: bucketName,
                objectName: filename,
                //contentType: 'image/png',
                cacheControl: 3600,
            },
            chunkSize: 6 * 1024 * 1024, // NOTE: it must be set to 6MB (for now) do not change it
            onError: function (error) {
                console.log('Failed because: ' + error);
                reject(error);
            },
            onProgress: function (bytesUploaded, bytesTotal) {
                let percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
                console.log(bytesUploaded, bytesTotal, percentage + '%');
            },
            onSuccess: function () {
                console.log('Download %s from %s', upload.file.name, upload.url);
                resolve();
            },
        });


        // Check if there are any previous uploads to continue.
        return upload.findPreviousUploads().then(function (previousUploads) {
            // Found previous uploads so we select the first one.
            if (previousUploads.length) {
                upload.resumeFromPreviousUpload(previousUploads[0]);
            }

            // Start the upload
            upload.start();
        });
    })
}


export async function uploadDataset(filePath, file) {
	return uploadFile('datasets', filePath, file);
}

export async function downloadDataset(filePath) {
	const { data, error } = await supabase.storage.from('datasets').download(filePath);
}


export function constructFilePath(competitionId, datasetType, filename) {
	return `${datasetType}/${competitionId}_${filename}`;
}
