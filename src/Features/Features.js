import React, { Component } from 'react';
import Options from './FeatureItem/FeatureItem.js';

class Features extends Component {
    render()  {

        return Object.keys(this.props.features)
        .map(key => {
          return <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
             <Options updateFeature={this.props.updateFeature} features={this.props.features} featurekey={key}/>
            </ul>
          </div>
        });  
        
         }

}
export default Features;  