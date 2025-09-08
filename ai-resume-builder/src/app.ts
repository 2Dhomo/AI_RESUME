import React from 'react';
import Header from './components/ResumeBuilder/Header';
import Sidebar from './components/ResumeBuilder/Sidebar';
import Canvas from './components/ResumeBuilder/Canvas';
import Toolbar from './components/ResumeBuilder/Toolbar';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="resume-builder">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="canvas-container">
                    <Toolbar />
                    <Canvas />
                </div>
            </div>
        </div>
    );
};

export default App;