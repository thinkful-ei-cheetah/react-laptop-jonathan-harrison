import React, { Component } from 'react';

class Features extends Component {
    render()  { 

            return this.props.features[this.props.featurekey].map((item, index) => {
            const selectedClass = item.name === this.props.features[this.props.featurekey].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
            <div className={featureClass}
                
                onClick={e => this.props.updateFeature(this.props.featurekey, item)}>
                { item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
            </div>
            </li>
            });
    }
}

export default Features;  
