import React from 'react'
import Nouislider from 'nouislider-react'
import { displayJsonContents } from '../my-tools/my-helper';



const PriceSlider = (props) => {

    const [priceMin, setPriceMin] = React.useState(Math.floor(props.priceRange.minPrice));
    const [priceMax, setPriceMax] = React.useState(Math.ceil(props.priceRange.maxPrice));


    const priceSlider = (render, handle, value, un, percent) => {

        const min = value[0].toFixed(0);
        const max = value[1].toFixed(0);

        setPriceMin(min);
        setPriceMax(max)

        props.onPriceFilterChange({ min: min, max: max });
    }


    return (
        <React.Fragment>
            <Nouislider
                key={2}
                range={{ min: 0, max: 200000 }}
                start={[priceMin, priceMax]}
                onUpdate={priceSlider}
                className={'mt-4 mt-lg-0'}
                connect
            />
            <div className="nouislider-values">
                <div className="min">From $<span id="slider-snap-value-from">{priceMin}</span></div>
                <div className="max">To $<span id="slider-snap-value-to">{priceMax}</span></div>
            </div>
        </React.Fragment>
    )
};

export default PriceSlider;
