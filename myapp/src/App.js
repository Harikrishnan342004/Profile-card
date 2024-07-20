import './App.css';
import React, { useState, useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import BackgroundAnimation from './BackgroundAnimation';
import DarkMode from './DarkMode/DarkMode';
import Drawer from './Drawer/Drawer';
import Name from './Name_Part/Name';
import "@fontsource/roboto";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={`App ${localStorage.getItem("selectedTheme")}`}>
      <DarkMode />
      <BackgroundAnimation />
  
      <img 
        src={localStorage.getItem("selectedTheme") === "dark" ? "./image.png" : "./profile.png"} 
        alt="" 
        className='middle-image' 
      />
      <Name />
      <Drawer />
    </div>
  );
}

export default App;
