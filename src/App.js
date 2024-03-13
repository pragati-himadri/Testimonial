import './App.css';
import reviews from "./data";
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="body">
      <div className="mainbr">
        <h1 className="title">Our Testimonials</h1>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;

