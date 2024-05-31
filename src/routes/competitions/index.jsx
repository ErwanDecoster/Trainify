import { Link, createFileRoute } from '@tanstack/react-router';

const Competitions = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col p-8 pb-32 gap-8'>
      <Link to={'/competitions/new'} className='fixed z-30 shadow-2xl bottom-8 left-1/2 -translate-x-1/2 border-2 border-black rounded-xl px-4 duration-300 py-2 bg-pink hover:bg-pink/80'>
        Create a competition
      </Link>
      <div className=''>
        <h1 className='text-5xl text-black'>Tr<b>ai</b>nify</h1>
      </div>
      <div className='bg-white text-black rounded-xl px-8 mx-auto max-w-screen-xl space-y-8'>
        <h2>Competition</h2>
        <div className='grid grid-cols-2 gap-8'>
          <Link to={'/competitions/1'} className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </Link>
          <Link to={'/competitions/2'}  className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </Link>
          <Link to={'/competitions/3'}  className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </Link>
          <Link to={'/competitions/3'}  className='group grid p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
            <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
            <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
            <h3>Competition title</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing nulla ut morbi quam. Tortor arcu vehicula ipsum at consequat odio duis. Sit in magna sed faucibus cursus sit sit in. Mattis nunc sollicitudin in a.</p>
            <p className='text-right'>3 days left</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/competitions/')({
  component: Competitions
});
