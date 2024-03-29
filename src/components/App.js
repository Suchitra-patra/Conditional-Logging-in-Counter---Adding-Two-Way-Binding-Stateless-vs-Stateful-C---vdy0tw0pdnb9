import React from 'react'
import '../styles/App.css';

class App extends React.Component{
  
  handleClick(){
    this.setState({count: this.state.count + 1})
  }
  constructor(props){
    super(props)
    this.state = {count:0}
    this.handleClick = this.handleClick.bind(this)
  }

  
  render(){
    this.state.count%2==0 ? console.log(`Rendering with count:-${this.state.count}`): this.state.count
    return(
      <div>
        <span id="count">{this.state.count%2==0 ? this.state.count : this.state.count-1}</span>
        <button id="incr-btn" onClick={this.handleClick}>Increment</button>
      </div>
    )

  }
}

export default App;