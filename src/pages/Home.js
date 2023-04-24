import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Bio from './Bio';
import Gallery from './Gallery';
import Contact from './Contact';
import Press from './Press';
import VoiceOver from './VoiceOver';
import Writing from './Writing';
import FilmAndTV from './FilmAndTV';

function Home() {
    const [currentPage, setCurrentPage] = useState('Bio');
  
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
      if (currentPage === 'Press') {
        return <Press />;
      }
      if (currentPage === 'VoiceOver') {
        return <VoiceOver />;
      }
      return <Bio />;
    }

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    )
};

export default Home;