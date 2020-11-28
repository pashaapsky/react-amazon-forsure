import React from 'react';
import Slider from "react-slick";
import homeImg1 from '../img/home/home-bg.jpg'
import homeImg2 from '../img/home/home-bg-2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/home.scss'

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };

    return (
        <div className="home">
            <div className="home__container fixed-container">
                <div className="home__body">
                    <Slider {...settings} className="home__slider home-slider">
                        <div className="home__slide">
                            <img
                                className="home__img"
                                src={homeImg1}
                                alt="amazon-previews"
                            />

                            <div className="home__heading left">
                                <h1 className="home__header">Watch movies and TV shows</h1>

                                <p className="home__span">Enjoy exclusive Amazon Originals as well as popular movies and
                                    TV shows.</p>

                                <small>Membership renews at € 5.99/month.</small>
                            </div>
                        </div>

                        <div className="home__slide">
                            <img
                                className="home__img"
                                src={homeImg2}
                                alt="amazon-previews"
                            />

                            <div className="home__heading right">
                                <h1 className="home__header">Great Entertainment</h1>

                                <p className="home__span">Watch The Grand Tour, award-winning Amazon Originals such as
                                    The Man in the High Castle and Mozart in the Jungle, as well as popular movies and
                                    TV shows, with all titles available to download.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="home__fade"/>
        </div>
    );
}

export default Home;