import About from './components/about';
import AboutMe from './components/about_me';
import Experience from './components/experiences';
import Projects from './components/projects';
import Footer from './components/footer';
import Header  from './components/header';

export default function Home() {
  return (
    <div>
      <Header/>
      <About />
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}