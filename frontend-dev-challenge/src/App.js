
import './sass/styles.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/Home"
import { ContactForm } from "./components/ContactForm"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>         
          <Route path="/" element= {<Home />} />
          <Route path="/contact" element= {<ContactForm />} />       
        </Routes>   
      </div>
    </BrowserRouter>
    
  );
}

export default App;
