import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Bio from './Bio';
import Gallery from './Gallery';
import Contact from './Contact';
import VoiceOver from './VoiceOver';
import Writing from './Writing';
import FilmAndTV from './FilmAndTV';
import Resume from './Resume';
import SplashPage from './SplashPage';
import Headshots from './Headshots';
import Theater from './Theater';

function Home() {
    const [currentPage, setCurrentPage] = useState('SplashPage');

    const handlePageChange = (page) => setCurrentPage(page);
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Writing') {
        return <Writing />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Gallery') {
        return <Gallery />;
      }
      if (currentPage === 'FilmAndTV') {
        return <FilmAndTV />;
      }
      if (currentPage === 'VoiceOver') {
        return <VoiceOver />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Bio') {
        return <Bio />;
      }
      if (currentPage === 'SplashPage') {
        return <SplashPage handlePageChange={handlePageChange}/>;
      }
      if (currentPage === 'Headshots') {
        return <Headshots />;
      }
      if (currentPage === 'Theater') {
        return <Theater />;
      }
      return <SplashPage handlePageChange={handlePageChange}/>;
    }



return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    )
};

export default Home;