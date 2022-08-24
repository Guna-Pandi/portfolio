import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Project from './components/Project';
import  Contact  from './components/Contact';
import Newsletter from './components/Newsletter';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import  MailchimpForm  from './components/MailchimpForm';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Project />
      <Contact />
      <Footer />
    


    </div>
  );
}

export default App;
