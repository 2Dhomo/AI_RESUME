import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import Toolbar from './Toolbar';

const ResumeBuilder: React.FC = () => {
    return (
        <div className="resume-builder">
            <Header />
            <div className="resume-builder-content">
                <Sidebar />
                <div className="resume-builder-main">
                    <Toolbar />
                    <Canvas />
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;