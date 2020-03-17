import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';

const CarInfo = () => {
    const car = useSelector(state => state.car);
    return (
        <div className="box">
            <Header car={car} />
            <AddedFeatures car={car} />
        </div>
    )
}

export default CarInfo
