import './App.css';
import './Css/Name.css';
import BackgroundAnimation from './BackgroundAnimation';
import DarkMode from './DarkMode/DarkMode';
import Drawer from './Drawer/Drawer'
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
      {/* <main class="middle-name">
      <p>Hello 👋 I'm</p>
      <section class="animation">
    <div class="first"><div>Hari krishnan</div></div>
    <div class="second"><div>Web Developer</div></div>
    <div class="third"><div>Photographer</div></div>
  </section>
      </main> */}




      

      <Drawer />
    </div>
  );
}

export default App;
