import React from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Events from './components/Events';
import Hobbies from './components/Hobbies';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Experience />
            <Events />
            <Hobbies />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
