import React, { Component } from 'react'
import { yes, no } from '../objects'

export default class Statement extends Component {
  constructor(props) {
    super()
    this.state = {
      default: true,
      statement: no['no-statement'],
      image: no['no-image']
    }
  }

  handleClick = () => {
    if (this.state.default ) {
      this.setState({
        default: false,
        statement: yes['yes-statement'],
        image: yes['yes-image']
      })
    } else {
      this.setState({
        default: true,
        statement: no['no-statement'],
        image: no['no-image']
      })
    } 
  }
  
  render() {
    return (
      <div>
        <h1>{ this.state.statement }</h1>
        <img onClick={ this.handleClick } src={ this.state.image } alt={ this.state.statement } />
      </div>
    )
  }
}