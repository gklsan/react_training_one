
import React, {Component} from 'react';
import PropTypes from 'prop-types' ;

class Planet extends Component {
  render() {
    //   console.log("pl: ", this.context.planetClickHandler());
    return (
      <div
        className={this.props.name}
        style={{
          backgroundColor: this.props.color,
          position: 'relative',
          width: this.props.diameter,
          height: this.props.diameter,
          borderRadius: this.props.diameter / 2,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <input
            type='text'
            onChange={this.context.planetClickHandler}
          />

          {this.props.name}
        </div>
      </div>
    );
  }
}
Planet.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  diameter: PropTypes.number,
};
Planet.contextTypes = {
  planetClickHandler: PropTypes.func,
};

export default Planet;
