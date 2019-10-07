import React, {Component} from 'react';

class Working extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isWorking: true
        };
      }
      handleClick = () => {
        this.setState({ isWorking: !this.state.isWorking });
      };
    render() {
    const light = this.state.isWorking ? 'working': 'sleeping';
    return (
      <div>
        <button onClick={this.handleClick} 
        className={light}
        >
           
        {light.toUpperCase()}</button>
        <img src= "./logo.svg" />
        
      </div>
    );
  }
}

export default Working;