import './App.css';
import Main from './Main/Main';
import BackgroundImage from './images/PortofolioMain.avif'
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center center"}} className="w-full h-screen">
      <Helmet>
        <title>My portfolio</title>
        <meta name="description" content="A portfolio website that describe about my Professional Career " />
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
