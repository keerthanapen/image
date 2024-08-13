import React from 'react';
import Header  from './comp/header';
import Home from './comp/home';
import About from './comp/about';
import Discover from './comp/discover';
import Experience from './comp/experience';
import Video from './comp/video';
import Places from './comp/places';
import Subscribe from './comp/subscribe';
import Sponsors from './comp/sponsors';
import Footer from './comp/footer';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Home />
                <About />
                <Discover />
                <Experience />
                <Video />
                <Places />
                <Subscribe />
                <Sponsors />
            </main>
            <Footer />
        </div>
    );
}

export default App;
