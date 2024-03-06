import './Hero.css';
import aboutpicture from '../../images/Ferrari_Tuning_Mansory_F8_Spider.jpg'
import React from 'react';

const blogPosts = [
    {
        id: 1,
        image: "images/bmw_i4.jpg",
        date: "Feb 14 2023",
        title: "How To Get Perfect Car At Low Prices?",
        content: "Research market values, consider used cars, compare prices, negotiate effectively, shop strategically, check for discounts, inspect the car, explore financing, consider private sellers, and be patient to find a perfect, affordable car.",
        readMoreLink: "#"
    },
    {
        id: 2,
        image: "images/ford-gt.jpg",
        date: "May 25 2023",
        title: "What's the best way to sell a car?",
        content: "Maximize your car trade-in by researching its value, ensuring it's in good condition, cleaning it thoroughly, organizing maintenance records, and negotiating separately from the new car purchase for the best deal.",
        readMoreLink: "#"
    },
    {
        id: 3,
        image: "images/ford-mustang.jpg",
        date: "Sept 01 2023",
        title: "How to drive more efficiently?",
        content: "Drive efficiently by maintaining a steady speed, avoiding rapid acceleration and braking, keeping your vehicle well-maintained, using cruise control on highways, reducing idling time, and removing unnecessary items to improve fuel efficiency.",
        readMoreLink: "#"
    }
];

const Hero = (cars) => {
    return (
        <>
            <section className="home">
                <div className="home-text">
                    <h1>We Have Everything<br />Your <span>Car</span> Need</h1>
                    <p>Our DealerShip is dedicated to delivering a higher <br />level of performance and driving pleasure to
                        enthusiasts <br />who seek a more spirited driving experience.</p>
                </div>
            </section>

            <section className="cars">
                <div className="heading">
                    <span>All Cars</span>
                    <h2>We have all types of cars</h2>
                    <p>
                        Our DealerShip is dedicated to delivering a higher level of performance and driving
                        pleasure to enthusiasts who seek a more spirited driving experience.
                    </p>
                </div>
                <div className="cars-container container">
                    {Array.isArray(cars) && cars.map((car) => (
                        <div key={car.Id} className="box">
                            <img src={car.Url} />
                            <p>{car.Model}</p>
                            <p>{car.RentalPriceDailyInUsd}</p>
                        </div>
                    ))}
                </div>

            </section>

            <section>
                <div className="about-container">
                    <div className="about-contact-box">
                        <div className="about-left"></div>
                        <div className="about-right">
                            <span>About Us</span>
                            <h2>Cheap Prices With <br />Quality Cars</h2>
                            <p>
                                Our DealerShip is dedicated to delivering a higher level of performance and driving
                                pleasure to enthusiasts who seek a more spirited driving experience.
                            </p>
                            <a href="aboutus.html" className="btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog">
                <div className="heading">
                    <span>Blog</span>
                    <h2>Our Blog Content</h2>
                </div>
                <div className="blog-container container">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="box">
                            <img src={post.image} alt="" />
                            <span>{post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <a href={post.readMoreLink} className="blog-gtn">Read More<i className='bx bxs-chevron-right'></i></a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Hero
