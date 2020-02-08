import React, { Component } from "react";
//https://sung.codes/blog/2017/12/03/loading-react-components-dynamically-demand/
import { shortid } from '../utils'

class Slot extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      components: []
    }
  }
  addComponent = async type => {
    console.log(`Loading ${type} component...`)
    import(`./${type}`)
      .then(component =>
        this.setState({
          components: this.state.components.concat(component.default)
        })
      )
      .catch(error => {
        console.error(`"${type}" not yet supported`)
      })
  }

  async componentDidMount() {
    const { elements } = this.props
    elements.map(async type => await this.addComponent(type))
  }
  render() {
    const { components } = this.state
    const { elementProps } = this.props
    // console.log('elementProps', elementProps)
    if (components.length === 0) return <div>Loading...</div>
    const componentsElements = components.map((Component, i) => (
      <Component key={shortid()} {...elementProps[i]} />
    ));
    return <div className="ifapp">{componentsElements}</div>;
  }
}

export default Slot
