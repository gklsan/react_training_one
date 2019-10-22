import React, {Component} from 'react';
import PropTypes from 'prop-types' ;

import SolarSystem from './SolarSystem';


class Galaxy extends Component {
  state = {
    content: 'test'
  }
  getChildContext() {
    return {
      planetClickHandler: this.planetClickHandler
    };
  }

  planetClickHandler = (event) =>  {
    console.log('Planet clicked. Galaxy notified.', event.target.value, this.state.content);
  }

  componentDidMount() {
    this.setState({content: 'new test'})
  }

  render() {
    return (
      <SolarSystem />
    );
  }
}
Galaxy.childContextTypes = {
  planetClickHandler: PropTypes.func,
};
export default Galaxy;
