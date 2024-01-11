import React, { Component } from 'react'

class ComponentLifeCycle extends Component {

    constructor(){
        super();
        this.state={count:0};
    }
    componentDidMount(){
        console.log("Mounted.....!")
    }
    handleClick=() =>{
        this.setState({count :this.state.count+1})
    }



  render() {
    return (
      <div>
      <h4 style={{ border: "1px solid" }} onClick={this.handleClick}>{this.state.count}</h4>
      
      </div>
    )
  }


  shouldComponentUpdate(){
    console.log("Component Should Updated.....?");
  }

  componentDidUpdate(){
    console.log("Component Updated......!");
  }
}

export default ComponentLifeCycle 
