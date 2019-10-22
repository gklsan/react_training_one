import React, {Component} from 'react';

import Planet from './Planet';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solar">
        <Planet
          color="darkcyan"
          diameter={150}
          name="Jupiter"
        />
        <Planet
          color="lightgreen"
          diameter={60}
          name="Earth"
        />
        <Planet
          color="darkgreen"
          diameter={40}
          name="Moon"
        />
      </div>
    );
  }
}
export default SolarSystem;
