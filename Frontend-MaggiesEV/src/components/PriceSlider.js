import React from 'react'
import Nouislider from 'nouislider-react'

const PriceSlider = ({top}) => {
    const [priceMin, setPriceMin] = React.useState(0)
    const [priceMax, setPriceMax] = React.useState(250)
    const priceSlider = (render, handle, value, un, percent) => {
        setPriceMin(value[0].toFixed(0))
        setPriceMax(value[1].toFixed(0))
    }
    return (
        <React.Fragment>
            <Nouislider
                key={2}
                range={{ min: 0, max: 250 }}
                start={[40, 110]}
                onUpdate={priceSlider}
                className={top ? '' : 'mt-4 mt-lg-0'}
                connect
            />
            <div className={`nouislider-values  ${top ? 'mb-4' : ''}`}>
                <div className="min">From $<span id="slider-snap-value-from">{priceMin}</span></div>
                <div className="max">To $<span id="slider-snap-value-to">{priceMax}</span></div>
            </div>
        </React.Fragment>
    )
};

export default PriceSlider;