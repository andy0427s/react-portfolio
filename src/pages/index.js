import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid centered>
        <Hero />
        <BgAnimation />
      </Section>
      <Experience />
      <Technologies />
      <Projects/>
    </Layout>
  );
};

export default Home;
