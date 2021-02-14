import heart from './heart.png';
import './LandingPage.css';
import {motion} from "framer-motion";

function LandingPage(props) {
  return(
    <div className="landing-page">

      <p className="i" >i</p>

      <motion.img 
        className="heart" 
        src={heart}
        onClick={props.moveCounter}
        animate={{
          scale: [1, 1.4, 1.3, 1.1, 1.04, 1.03, 1.02, 1.01, 1]
        }}
        transition={{
          repeat: Infinity
        }}

      />

      <p className="u" >u</p>

    </div>
  )
};

export default LandingPage;