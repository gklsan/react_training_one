import React, {Component} from 'react';

const Hoc = () => <Intermediate mytext="What is react??" />;

const Intermediate = (props) => <Child {...props} />;

const Child = (props) => <span>{props.mytext}</span>;
  
// class  Hoc extends Component{
//   render() {
//     return <Intermediate mytext="What is react??" />;
//   }
// }
//
// class  Intermediate extends Component{
//   render() {
//     // Intermediate doesn't care about "text", but just passes it down.
//     return <Child mytext={this.props.mytext} />;
//   }
// }
//
// class  Child extends Component{
//   render() {
//     return <span>{this.props.mytext}</span>;
//   }
// }

export default Hoc ;

