import React from 'react';
import { useSelector } from 'react-redux';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const FeatureSelector = () => {
    const { car, additionalFeatures, additionalPrice } = useSelector(state => state);
    return (
        <div className="box">
            <AdditionalFeatures additionalFeatures={additionalFeatures} />
            <Total car={car} additionalPrice={additionalPrice} />
        </div>
    )
}

export default FeatureSelector
