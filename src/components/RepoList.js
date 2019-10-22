import React from 'react';

class RepoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      prm: this.props.prm
    }
  }

  componentDidMount() {
    this.state.prm.then(datas => {
      this.setState({items: datas.items})
    })
  }

  buildList = () => {
    return this.state.items.map(data => {
      return (
        <li key={data.name}>
          Name: {data.name}
          <br/>
          Full Name: {data.full_name}
        </li>)
    })
  }

  render() {
    return (
      <ul>
        { this.buildList() }
      </ul>
    )
  }

}

export default RepoList;
