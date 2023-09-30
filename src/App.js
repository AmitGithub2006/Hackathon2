
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import VoiceRecognition from './components/VoiceRecognition';
import Grammer from './components/Grammer';
import Translation from './components/Translation';
import VoiceParagraphAssistent from './VoiceParagraphAssistent';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/voice-recognition" element={<VoiceRecognition />} />
          <Route path="/paragraph-assistent" element={<VoiceParagraphAssistent />} />
          <Route path="/grammer" element={<Grammer/>} />
          <Route path="/translation" element={<Translation/>} />

        
        </Routes>
      </div>
    </Router>
  );
}

export default App;