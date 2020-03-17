import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const Boxes = ({ car, additionalFeatures, additionalPrice }) => {
    return (
        <div className="boxes">
            <div className="box">
                <Header car={car} />
                <AddedFeatures car={car} />
            </div>
            <div className="box">
                <AdditionalFeatures additionalFeatures={additionalFeatures} />
                <Total car={car} additionalPrice={additionalPrice} />
            </div>
        </div>
    )
}

// Receiver the entire state tree as parameter
// Return an object with the slices of state that you want/need to access in this component
const mapStateToProps = state => {
    const { car, additionalFeatures, additionalPrice } = state;
    return {
        car,
        additionalFeatures,
        additionalPrice
    }
}

export default connect(mapStateToProps, {})(Boxes);
