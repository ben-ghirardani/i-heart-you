import heart from './heart.png';
import './LandingPage.css';
// import heart 

function LandingPage() {
  return(
    <div className="landing-page">
      <p className="i" >i</p>
      <img className="heart" src={heart} />
      <p className="u" >u</p>
    </div>
  )
};

export default LandingPage;