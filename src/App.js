import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
<div>
<Header/>
  <main>
    <About/>
   <Work/>
   <Contact/>
  </main>
</div>

    </div>
  );
}

export default App;
