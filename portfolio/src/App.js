import React from 'react';
import './App.css';
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Footer from './Components/Footer/footer';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";



class App extends React.Component {
  state = {
    projects: []
  }


  getProjects = async () => {
    let id = '1K-A_YU_SC9yevfyvhsw97skP48P8VARCRoJPzav1Tc4'
    let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
    const resp = await axios.get(source);
    console.log('this id resp.data.feed.entry', resp.data.feed.entry)
    let projects = resp.data.feed.entry.map( d => {
      let projects = {
        title: d.gsx$title.$t,
        image: d.gsx$image.$t,
        description: d.gsx$description.$t,
        languages: d.gsx$languages.$t,
        deployed: d.gsx$deployed.$t,
        mockup: d.gsx$mockup.$t
      }
      return projects
    })
    this.setState({
      projects: projects
    })
  }

  componentDidMount() {
    this.getProjects()
  }

  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Projects
          projects={this.state.projects}
        />
        <Footer />
      </div>
    );
  }
}



export default App;
