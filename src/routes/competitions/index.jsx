import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { useLoginLogout } from './../../utils/useLoginLogout.ts';
import { getCompetitions } from './../../database.jsx';
import { useState, useEffect } from "react";
                  
const Competitions = () => {
  const navigate = useNavigate();
  const { logout } = useLoginLogout();
  const [competitions, setCompetitions] = useState(1);

  const handleLogout = () => {
    logout()
    navigate({ to: '/' });
  }
  useEffect(() => {
    const fetchCompetitions = async () => {
      const competitions = await getCompetitions();
      setCompetitions(competitions);
    };
    fetchCompetitions();
  }, []);
  console.log(competitions);
  return (
    <div className='bg-white min-h-screen flex flex-col p-8 pb-32 gap-8'>
      <div className='fixed bottom-8 z-30 left-1/2 -translate-x-1/2 flex border-2 border-black bg-black rounded-xl overflow-hidden'>
        <button onClick={handleLogout} className='px-4 duration-300 text-white py-2 bg-black hover:bg-black/80 rounded-[10px]'>
          Logout
        </button>
        <Link to={'/competitions/new'} className='px-4 duration-300 py-2 bg-pink hover:bg-pink/80 rounded-[10px]'>
          Create a competition
        </Link>
      </div>
      <div className=''>
        <h1 className='text-5xl text-black'>Tr<b>ai</b>nify</h1>
      </div>
      <div className='bg-white text-black rounded-xl px-8 mx-auto max-w-screen-xl space-y-8'>
        <h2>Competitions</h2>
        <div className='grid grid-cols-2 gap-8'>
        {competitions.length > 0 ? (
          competitions.map((competition) => (
            <Link to={'/competitions/' + competition.id} key={competition.id} className='group grid gap-1 p-8 z-0 relative overflow-hidden rounded-lg shadow-lg'>
              <span className='absolute -z-10 -translate-y-1/2 -translate-x-1/2 left-0 size-52 top-0 group-even:bg-orange bg-pink rounded-full' />
              <span className='absolute -z-10 translate-y-1/2 translate-x-1/2 right-0 size-52 bottom-0 group-even:bg-orange/50 bg-pink/50 rounded-full' />
              <h3>{competition.title}</h3>
              <p>{competition.short_description}</p>
              <p className='text-right'>{Math.round(competition.duration / (24 * 60 * 60))} days left</p>
            </Link>
          ))
        ) : (
          <p className="text-center">No competition</p>
        )}
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/competitions/')({
  component: Competitions
});
