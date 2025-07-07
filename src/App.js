import './App.css';
import About from'./components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Other from './components/Other';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const readtoken = '06aefcf9318265fb82a0bd922ead6f2fa1d0cfdb'
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${readtoken}`).then(res => {
        setData(res.data.data.fields.my_personal_portfolio);
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  }, []);
  return (
    <div >
      <Navbar />
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
      <Contact />
      <Other content={data[4]}/>
    </div>
  );
}

export default App;
