import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from "react";

const CompetitionId = () => {
  const [activeTab, setActiveTab] = useState(1);
  

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
          <h2>Title</h2>
          <span>by</span>
          <img className='size-8' src="" alt="" />
          <span>0xf525....A6F74d</span>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum quasi enim iure. Quis, commodi adipisci eaque qui esse vel, incidunt in hic praesentium, iusto vero culpa perspiciatis ad! Nostrum?</p>
          <p>2 days left</p>
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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore facere harum eaque corrupti in praesentium! Unde adipisci velit perferendis eligendi vitae nulla blanditiis dignissimos cum nihil. Architecto ut amet laborum.</p>
              </div>
              <div className='space-y-1'>
                <h4>Dataset description</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore facere harum eaque corrupti in praesentium! Unde adipisci velit perferendis eligendi vitae nulla blanditiis dignissimos cum nihil. Architecto ut amet laborum.</p>
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
              <div className='bg-white rounded-lg px-4 py-2 grid grid-cols-4'>
                <div><img src="" alt="" /><span>0xf525....A6F74d</span></div>
                <p>Uploaded date</p>
                <p>0%</p>
                <p>3 RLC</p>
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
