import React, { useState, useEffect } from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/animations.css';
import Chatbot from '../../components/Chatbot/Chatbot';
import PageShimmer from '../../components/Shimmer/PageShimmer';


const App = () => { 
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Check if this is a page refresh or initial load
    const hasLoaded = sessionStorage.getItem('appLoaded');
    
    if (!hasLoaded) {
      // First load or hard refresh - show shimmer briefly
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
        sessionStorage.setItem('appLoaded', 'true');
      }, 800);
      return () => clearTimeout(timer);
    } else {
      // Navigation within app - no shimmer
      setIsInitialLoad(false);
    }
  }, []);

  if (isInitialLoad) {
    return <PageShimmer />;
  }

  return (
    <div className="App" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
          <Chatbot/>
    </div>
  );
}

export default App;