import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useLoginLogout } from './../utils/useLoginLogout.ts';
import { useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';

const HomePage = () => {
  const { login, logout, isAuthenticated } = useLoginLogout();
  const router = useRouter();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log('isAuthenticated');
      navigate({ to: '/competitions' });
    }
  }, [isAuthenticated, router]);



  
  return (
    <div className='bg-black grid p-8 pb-32 gap-8'>
      <div className='grid grid-cols-2 gap-8 min-h-[80vh] mx-auto w-full max-w-screen-xl'>
        <div className='text-white flex flex-col items-center justify-center gap-12'>
          <h1 className='text-7xl'>Tr<b>ai</b>nify</h1>
          <div className='max-w-xl space-y-6'>
            <p>Welcome to Trainify, the platform where data and AI models come together to create something extraordinary!</p>
            <p>Here’s how it works: you have a fantastic dataset and you're looking for the perfect AI model to make the most of it. That’s where Trainify steps in. Share your dataset with talented model owners, who will compete to deliver the highest accuracy. The model owners set the prize, and as the dataset owner, you get to choose and reward the best-performing model at the best price.</p>
          </div>
        </div>
        <div className='bg-pink relative z-0 rounded-xl p-8 flex flex-col items-center justify-center gap-4 _cover'>
          <button onClick={login} className='bg-white px-4 py-1 text-center rounded-full'>Connect <b>my</b> wallet</button>
          <button className='bg-white px-4 py-1 text-center rounded-full'>See competitions</button>
        </div>
      </div>
      <div className='bg-white text-black rounded-xl p-8 mx-auto max-w-screen-xl space-y-8'>
        <h2>Competition</h2>
        <div className='grid grid-cols-2 gap-8'>
          <div className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </div>
          <div className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </div>
          <div className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </div>
          <div className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: HomePage
});
