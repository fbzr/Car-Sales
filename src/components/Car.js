import React from 'react';
import CarInfo from './CarInfo';
import FeatureSelector from './FeatureSelector';

const Car = () => {
    return (
        <div className="boxes">
            <CarInfo />
            <FeatureSelector />
        </div>
    )
}

export default Car;
