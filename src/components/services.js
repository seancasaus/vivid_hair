import React, {useState} from 'react'
import services from '../data/services'
import ServicePrice from './service-price' 

const getPriceContent = (price, description) => {
    return () => {
        return (
            <div className="servicePrice">
                <h2 className="xanh-mono">{price}</h2>
                <br/>
                <p className="xanh-mono">Description: {(description === '') ? 'Contact for Details' : description}</p>
            </div>
        )
    }
}

class Services extends React.Component {
    constructor(props) {
        super(props)
        console.log(services);
        this.state = {
            service: 'Child haircut',
            price: '$30 per hour',
            description: '',
        }
    }

    render() {

        return (
            <div className="services row">
                <div className="servicesContent">
                    <h1 className="arapey">Our Services Offered</h1>
                    <br/>
                    <div className="scroller xanh-mono">
                        {ServicePrice(getPriceContent(this.state.price, this.state.description))}
                        {services.map(({ service }) => {
                        return (
                            <div className="service" data-tip="" data-for="service-price">
                                {service}
                            </div>
                        );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Services