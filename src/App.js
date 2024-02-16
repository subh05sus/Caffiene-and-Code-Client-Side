import React, {useState} from "react";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';
import OurTeam from './components/OurTeam';
import LeaderBoard from './components/ContributionLeaderboard';
import NoPage from './components/NoPage';
import MouseFollowerCircle from "./components/MouseFollowerCircle";
import AnimatedCursor from "react-animated-cursor"
function App() {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      {/* <MouseFollowerCircle/> */}      
      <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color='255, 255, 255'
      outerAlpha={1}
      innerScale={0.7}
      outerScale={3}
      outerStyle={{ mixBlendMode: 'difference'}}
      innerStyle={{ mixBlendMode: 'difference'}}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Router>
      {<Navbar/>}
      <LoadingBar
        color='#005764'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="topMarginHeader"></div>
        <Routes>
          <Route index element={<Homepage setProgress = {setProgress} />} />
          <Route path="projects" element={<ProjectsPage setProgress = {setProgress} />} />
          <Route path="our-team" element={<OurTeam setProgress = {setProgress} />} />
          <Route path='leaderboard' element={<LeaderBoard setProgress={setProgress} />} />
          <Route path="*" element={<NoPage setProgress = {setProgress} />} />
        </Routes>
      </Router>

    </div>
  );
};


export default App