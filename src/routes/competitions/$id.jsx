import { createFileRoute, Link, useMatch } from '@tanstack/react-router';
import { useState, useEffect } from "react";
import avatar from "./../../assets/avatars/1.png";
import { getCompetitions } from './../../database.jsx';

const CompetitionId = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [competitions, setCompetitions] = useState([]);
  
  const [competitionId, setCompetitionId] = useState(null);
  const { params } = useMatch('/collections/$id');
  useEffect(() => {
    const fetchCompetitions = async () => {
      const competitions = await getCompetitions();
      setCompetitions(competitions);
    };
    fetchCompetitions();
  }, []);

  useEffect(() => {
    setCompetitionId(params.id)
    console.log(competitions);
  }, [params.id]);

  return (
    <div className='bg-white min-h-screen flex flex-col p-8 pb-32 gap-8'>
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 flex border-2 border-black bg-black rounded-xl overflow-hidden'>
        <Link to='/competitions' className='px-4 duration-300 text-white py-2 bg-black hover:bg-black/80 rounded-[10px]'>
          Got back
        </Link>
        <button className='px-4 duration-300 py-2 bg-pink hover:bg-pink/80 rounded-[10px]'>
          Join competition
        </button>
      </div>
      
      <div className=''>
        <h1 className='text-5xl text-black'>Tr<b>ai</b>nify</h1>
      </div>
      <div className='bg-white text-black rounded-xl px-8 mx-auto max-w-screen-xl w-full space-y-8'>
        <div className='flex gap-1 items-center'>
          <h2>Red Wine Quality</h2>
          <span>by</span>
          <img className='size-8' src={avatar} alt="" />
          <span>0xf525....A6F74d</span>
        </div>
        <div className='space-y-2'>
          <p>For this competition, use your machine-learning skills to create a model that predicts if a wine is good or bad. You can set a threshold for wine quality, classifying wines with a score of 6 or higher as 'good' (1) and the rest as 'not good' (0).</p>
          <p className='font-semibold'>7 days left</p>
        </div>
        <div className='grid'>
          {activeTab === 1 ? ( 
            <div className='grid grid-cols-2  w-fit'>
              <button onClick={() => setActiveTab(1)}>
                <h3 className='rounded-tl-xl text-center bg-pink p-4 h-auto'>Overview</h3>
              </button>
              <button onClick={() => setActiveTab(2)}>
                <h3 className='rounded-tr-xl text-center duration-300 bg-pink/20 hover:bg-pink/80 p-4 h-auto'>Leaderboard</h3>
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-2  w-fit'>
              <button onClick={() => setActiveTab(1)}>
                <h3 className='rounded-tl-xl text-center duration-300 bg-pink/20 hover:bg-pink/80 p-4 h-auto'>Overview</h3>
              </button>
              <button onClick={() => setActiveTab(2)}>
                <h3 className='rounded-tr-xl text-center bg-pink p-4 h-auto'>Leaderboard</h3>
              </button>
            </div>
          )}
          {activeTab === 1 ? (
            <div className='space-y-8 p-8 bg-pink rounded-b-xl rounded-tr-xl'>
              <div className='space-y-1'>
                <h4>Overview description</h4>
                <p>Birds are excellent indicators of biodiversity change since they are highly mobile and have diverse habitat requirements. Changes in species assemblage and the number of birds can thus indicate the success or failure of a restoration project. However, frequently conducting traditional observer-based bird biodiversity surveys over large areas is expensive and logistically challenging. In comparison, passive acoustic monitoring (PAM) combined with new analytical tools based on machine learning allows conservationists to sample much greater spatial scales with higher temporal resolution and explore the relationship between restoration interventions and biodiversity in depth.</p>
              </div>
              <div className='space-y-1'>
                <h4>Dataset description</h4>
                <p>The two datasets are related to red and white variants of the Portuguese "Vinho Verde" wine. For more details, consult the reference [Cortez et al., 2009]. Due to privacy and logistic issues, only physicochemical (inputs) and sensory (the output) variables are available (e.g. there is no data about grape types, wine brand, wine selling price, etc.).

These datasets can be viewed as classification or regression tasks. The classes are ordered and not balanced (e.g. there are much more normal wines than excellent or poor ones).</p>
              </div>
              <button className='rounded-lg text-center duration-300 bg-black text-white hover:bg-black/80 py-2 px-4 h-auto' onClick={() => setActiveTab(1)}>
                Download train dataset
              </button>
            </div>
          ) : (
            <div className='space-y-4 p-8 bg-pink rounded-b-xl rounded-tr-xl'>
              <div className='px-4 grid grid-cols-4'>
                <p>Contestant</p>
                <p>Uploaded date</p>
                <p>Accuracy</p>
                <p>Price</p>
              </div>
              <div className='bg-white rounded-lg px-4 py-2 grid grid-cols-4'>
                <div><img src="" alt="" /><span>0xf525....A6F74d</span></div>
                <p>Uploaded date</p>
                <p>0%</p>
                <p>3 RLC</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/competitions/$id')({
  component: CompetitionId
});
