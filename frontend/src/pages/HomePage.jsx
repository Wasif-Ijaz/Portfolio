import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Jobs from '../components/Jobs';
import ViewWorks from '../components/ViewWorks';
import Skills from '../components/Skills';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <HomeCards />
      <Jobs isHome={true} />
      <ViewWorks />
    </div>
  );
};

export default HomePage;
