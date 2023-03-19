import './assets/style/global.scss';
import Header from './pages/Header';
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './pages/Footer';
import Background from './pages/Background-img';
import Hotels from './pages/Hotels';




function App() {
  return (
    <div className="App">
     <Header/>
     <Background/>
     <Rooms/>
     <About/>
     <Hotels/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
