import React from 'react';
import '../scss/home.scss'

function Home() {
    return (
        <div className="home">
            <div className="home__container fixed-container">
                <div className="home__body">
                    <div className="home__content">
                        <div className="home__heading">
                            <h1 className="home__header">Watch movies and TV shows</h1>

                            <p className="home__span">Enjoy exclusive Amazon Originals as well as popular movies and TV shows.</p>

                            <small>Membership renews at € 5.99/month.</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__fade"/>
        </div>
    ); 
}

export default Home;