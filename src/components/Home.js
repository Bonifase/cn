import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className="App-header">
        Welcome To Members Contribution
            <Link to="/welcome">
            <button className="get-started">Get Started</button>
            </Link>
        </header>
        
    )
}
export default Home;




  