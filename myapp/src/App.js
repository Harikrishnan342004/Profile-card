import './App.css';

import BackgroundAnimation from './BackgroundAnimation';
import DarkMode from './DarkMode/DarkMode';
import Drawer from './Drawer/Drawer'
import Name from './Name_Part/Name'
import "@fontsource/roboto";

function App() {
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
