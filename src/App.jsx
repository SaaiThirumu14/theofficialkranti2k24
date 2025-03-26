import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'; 
import Landing from './Component/Landing/App';
import EscapeParadox from './Component/Event/EscapeParadox';
import TimelessTruths from './Component/Event/TimelessTruth';
import Chronobid from './Component/Event/Chronobid';
import Cyberheist from './Component/Event/CyberHeist' 
import Sympoclock from './Component/Event/SympoClock'
import LyricQuest from './Component/Event/LyricQuest'
import PictoWord from './Component/Event/Pictoword'
import Interstellar from './Component/Event/InterstellarHarmonics';
import Dev from './Component/Developers/Dev';
import About from './Component/About/About';
import MemeRewind from './Component/Event/MemeRewind';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/event" element={<Sympoclock />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Dev' element={<Dev />}/>
        <Route path='/meme' element={<MemeRewind/>}/>
        <Route path="/escapeparadox" element={<EscapeParadox />} />
        <Route path="/timelesstruth" element={<TimelessTruths />} />
        <Route path="/chronobid" element={<Chronobid />} />
        <Route path="/Cyberheist" element={<Cyberheist />} />
        <Route path="/lyric" element={<LyricQuest />} />
        <Route path="/inter" element={<Interstellar />} />
        <Route path="/picto" element={<PictoWord />} />
        
      </Routes>
    </Router>
  )
}

export default App
