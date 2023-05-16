import {Navbar, Welcome, Projects, Footer} from './components'
import './index.css'


const App =() => {

  return (

    <div>
      <div className="gradient-bg-navbar">
        <Navbar/>
        <Welcome/>
      </div>
      <div className>
        <Projects />
        
        <Footer/>
      </div>
    </div>
  );
}

export default App
