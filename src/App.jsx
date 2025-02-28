
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,romanceMovies,horrorMovies,trending,comedyMovies,documentaries} from './components/Urls/Urls'
import Footer from './components/Footer/Footer';


function App() {
  
  return (
      <div className='App'>
        <Navbar/>
        <Banner/>
        <RowPost url={trending} title='Trending'/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url= {action} title='Action' isSmall/>
        <RowPost url= {comedyMovies} title='Comedy' isSmall/>
        <RowPost url= {horrorMovies} title='Horror' isSmall/>
        <RowPost url= {romanceMovies} title='Romance' isSmall/>
        <RowPost url= {documentaries} title='Documentary' isSmall/>
        <Footer/>
        
      </div>
    
  );
}

export default App
