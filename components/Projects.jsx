
import GoogleGif from '../app/assets/google.gif';
import HomeFinderGif from '../app/assets/HomeFinder.gif';
import liftSimulationGif from '../app/assets/liftSimulation.gif';
import AnimateLetters from './clients/AnimateLetters';
import ProjectSection from './clients/ProjectSection';


const Projects = () => {
  
  return (
    <section className='max-w-6xl p-2 mx-auto mt-10 overflow-hidden rounded-lg shadow-2xl md:p-4'>
      <AnimateLetters  letter='Featured Projects' />
      <div className='flex flex-col gap-24'>
        <ProjectSection
          imageSrc={GoogleGif}
          title='Google Clone 🌐'
          indexValue={0}
          liveLink='https://google-clone-khan.vercel.app/'
          githubLink='https://github.com/Mudassirkhan2/google-clone'
        />
        <ProjectSection
          imageSrc={HomeFinderGif}
          title='Home Finder 🏠'
          indexValue={1}
          liveLink='https://home-finder-khan.vercel.app/'
          githubLink='https://github.com/Mudassirkhan2/HomeFinder'
        />
        <ProjectSection
          imageSrc={liftSimulationGif}
          title='Lift Simulation 🛗'
          indexValue={2}
          liveLink='https://mudassirkhan2.github.io/Lift-Simulation/'
          githubLink='https://github.com/Mudassirkhan2/Lift-Simulation'
        />
      </div>
    </section>
  );
};

export default Projects;

