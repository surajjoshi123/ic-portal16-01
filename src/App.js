// import { Navbar } from 'react-bootstrap';
import './App.css';
import Crossfade from './Components/Crossfade.js';
import Menubar from './Components/Menubar.js';
import Navbar from './Components/Navbar';
import Catagories from './Components/Catagories';
import Storypage from './Components/Storypage';
// import CatagoriesList from './Components/CatagoriesList';
import FreedomArchive from './Components/FreedomArchive';
import DidYouKnow from './Components/DidYouKnow';
import TodayInHistory from './Components/TodayInHistory';
import VirtualWalk from './Components/VirtualWalk';
import Jewell from './Components/Jewell';
import ExternalLinks from './Components/ExternalLinks';
import MoCOrganization from './Components/MoCOrganization';
import Partners from './Components/Partners';
import Footer from './Components/Footer';

function App() {
  
  return (
    <>
      <div style={{ backgroundColor: '#e5e5e5' }}>
        <Navbar />
        <Menubar />
        <Crossfade />
        <Catagories />

       <FreedomArchive />

        <DidYouKnow />
        <TodayInHistory />
        <Storypage />
        <VirtualWalk />
        <Jewell/>
        <ExternalLinks/>
        <MoCOrganization/>
        <Partners />
        <Footer/>
      </div>
    </>
  );
}

export default App;
