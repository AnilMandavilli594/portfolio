import './App.css';
import Main from './Main/Main';
import BackgroundImage from './images/PortofolioMain.avif'
function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center center"}} className="w-full h-screen">
      <Main />
    </div>
  );
}

export default App;
