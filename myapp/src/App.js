// import './App.css';
// import BackgroundAnimation from './BackgroundAnimation';
// import Footer from './Footer';
// import DarkMode from './DarkMode/DarkMode';

// function App() {
//   return (
//     <div className="App">
//       <DarkMode></DarkMode>
//       <BackgroundAnimation />
      
//       <img src="./profile.png" alt="" className='middle-image' />
//       <Footer></Footer>
      

      
      
//     </div>
//   );
// }

// export default App;
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import Footer from './Footer';
import DarkMode from './DarkMode/DarkMode';

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
      <Footer />
    </div>
  );
}

export default App;
