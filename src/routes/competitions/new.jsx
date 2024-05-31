import { createFileRoute, useNavigate, Link } from '@tanstack/react-router';
import { useRef, useState } from "react";

const NewCompetitions = () => {
  const form1Ref = useRef();
  const [formStep, setFormStep] = useState(1);
  const navigate = useNavigate();

  const handleFormStep1 = (event) => {
    event.preventDefault();
    const formData = new FormData(form1Ref.current);
    const title = formData.get('title');
    const shortDesc = formData.get('shortDesc');
    const duration = formData.get('duration');
    const overviewDescription = formData.get('overviewDescription');
    const datasetDescription = formData.get('datasetDescription');
  
    console.log('Title:', title);
    console.log('Short Description:', shortDesc);
    console.log('Duration:', duration);
    console.log('Overview Description:', overviewDescription);
    console.log('Dataset Description:', datasetDescription);
  
    setFormStep(2);
  };
  
  const handleFormStep2 = (event) => {
    event.preventDefault();
    const formData = new FormData(form1Ref.current);
    const testDataset = formData.get('testDataset');
    const trainDataset = formData.get('trainDataset');
    const evaluationDapp = formData.get('evaluationDapp');
  
    console.log('Test Dataset:', testDataset);
    console.log('Train Dataset:', trainDataset);
    console.log('Evaluation Dapp:', evaluationDapp);
  
    navigate({ to: '/competitions' });
  };
  

  return (
    <div className='bg-white min-h-screen flex flex-col p-8 pb-32 gap-8'>
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 flex border-2 border-black bg-black rounded-xl overflow-hidden'>
        <Link to='/competitions' className='px-4 duration-300 py-2 text-white bg-black hover:bg-black/80 rounded-[10px]'>
          Cancel
        </Link>
        {formStep === 2 && (
          <button onClick={() => setFormStep(1)} className='px-4 duration-300 py-2 text-white bg-black hover:bg-black/80 rounded-[10px]'>
            Previous step
          </button>
        )}
        {formStep === 1 ? (
          <button onClick={handleFormStep1} className='px-4 duration-300 py-2 bg-pink hover:bg-pink/80 rounded-[10px]'>
            Next step
          </button>
        ) : (
          <button onClick={handleFormStep2} className='px-4 duration-300 py-2 bg-pink hover:bg-pink/80 rounded-[10px]'>
            Add my competition
          </button>
        )}
      </div>
      
      <div className=''>
        <h1 className='text-5xl text-black'>Tr<b>ai</b>nify</h1>
      </div>
      <div className='bg-white text-black rounded-xl px-8 mx-auto max-w-screen-xl w-full space-y-8'>
        <h2>New competition</h2>
        {formStep === 1 ? (
          <form onSubmit={handleFormStep1} ref={form1Ref} className='grid grid-cols-3 gap-8 w-full'>
            <div className='bg-pink flex flex-col gap-4 rounded-xl p-8'>
              <h3>Card detail</h3>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="title">Title :</label>
                <input className='rounded-lg p-1' type="text" id='title' name='title' />
              </div>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="shortDesc">Short description :</label>
                <textarea className='rounded-lg p-1' id='shortDesc' name='shortDesc' />
              </div>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="duration">Duration :</label>
                <input className='rounded-lg p-1' type="text" id='duration' name='duration' />
              </div>
            </div>
            <div className='bg-pink col-span-2 rounded-xl p-8 grid gap-4'>
              <h3>Competition working data</h3>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="overviewDescription">Overview description :</label>
                <textarea className='rounded-lg p-1 min-h-48' id='overviewDescription' name='overviewDescription' />
              </div>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="datasetDescription">Dataset description :</label>
                <textarea className='rounded-lg p-1 min-h-48' id='datasetDescription' name='datasetDescription' />
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleFormStep2} ref={form1Ref} className='grid gap-8 w-full'>
            <div className='bg-pink rounded-xl p-8 grid grid-cols-3 gap-4'>
              <h3 className='col-span-3'>Competition working data</h3>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="testDataset">Test dataset :</label>
                <input type='file' className='rounded-lg p-1 min-h-48' id='testDataset' name='testDataset' />
              </div>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="trainDataset">Train dataset :</label>
                <input type='file' className='rounded-lg p-1 min-h-48' id='trainDataset' name='trainDataset' />
              </div>
              <div className='grid gap-1 text-lg'>
                <label htmlFor="evaluationDapp">Evaluation Dapp :</label>
                <input type='file' className='rounded-lg p-1 min-h-48' id='evaluationDapp' name='evaluationDapp' />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export const Route = createFileRoute('/competitions/new')({
  component: NewCompetitions
});
