import './App.css';
import LandingPage from './component/LandingPage/LandingPage.jsx';
import Reasons from './component/Reasons/Reasons.jsx';

function App() {
  return (
    <div onClick={
      () => {
        console.log("page was clicked")
      }
    }>
      <LandingPage/>
      <Reasons/>
    </div>
  );
}

export default App;