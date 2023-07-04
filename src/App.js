
import './App.css';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import css from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import js from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import TandC from './pages/TandC';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Opps from './pages/Opps';
import Faqs from './pages/Faqs';
// import Learningcard from './pages/Learningcard';

function App() {
  return (
    <div className="App">
      <div className='early'>
        <p>🥳 Get the Early Bird Discount of Flat Rs. 1500. Enroll Now!</p>
      </div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">CODING<span> SHUTTLE</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#testinomial-scroll">Testinomials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#curriculum-scroll">Curriculum</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#faqs-scroll">FAQs</a>
              </li>

            </ul>
            <div>
              <a href='/notfound'><button className='enroll'>Enroll Now</button></a>
              <a href='/notfound'><button className='login'>Login with Google</button></a>
            </div>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms&conditions' element={<TandC />} />
        <Route path='/privacypolicy' element={<Privacy />} />
        <Route path='/refundpolicy' element={<Refund />} />
        <Route path='/notfound' element={<Opps />} />
        <Route path='/FAQS' element={<Faqs />} />

      </Routes>
    </div>
  );
}

export default App;
