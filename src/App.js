import React, {useState} from 'react';
import './App.css';
import LandingPage from './component/LandingPage/LandingPage.jsx';
import Reasons from './component/Reasons/Reasons.jsx';

function App() {

  const [ counter, setCounter ] = useState(0);
  const [ reasons, setReasons ] = useState(
    [
        {
        fontSize: "250px", lineHeight: "250px", text: ""
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because you're beautiful"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because you protect all creatures"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because you make me smile and laugh every day"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...becuase you have a great sense of humour"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because you're intelligent"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because you never give up"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because you love pizza and cats!"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because being with you makes me feel warm and happy inside"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...because we go together like coffee and keto bars!"
      },
      {
        fontSize: "100px", lineHeight: "100px", text: "...becasue you are a great cook"
      }
    ]
  );

  function moveCounter() {
    if(counter === reasons.length - 1) {
      setCounter(1)
    } else {
      setCounter(counter + 1)
    }
  };

  return (
    <div>
      <LandingPage
        moveCounter={moveCounter}
      />
      <Reasons
        reasons={reasons}
        counter={counter}
      />
    </div>
  );
}

export default App;