import React, { useEffect } from 'react';
import './CarsList.css';
import axios from '../../api/axiosConfig';

function CarsList({ getAllCars, cars }) {
    useEffect(() => {
        getAllCars();
    }, []);

    return (
        <div className="hero">
            <h2>Featured Cars</h2>
            <div className="cars-container container">
                {cars ? (
                    cars && cars.map && cars.map((car, index) => (
                        <div key={index} className="box">
                            <img src={car.url} alt={car.model} />
                            <p>{car.model}</p>
                            <p>{car.rental_price_daily_in_usd}</p>
                        </div>
                    ))
                ) : (
                    <div style={{color: 'gold'}}>
                        <p>Loading...</p>
                    </div>
                )}
            </div>

        </div>
    );
}

export default CarsList;
