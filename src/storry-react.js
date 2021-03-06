import { createElement, cloneElement, Children, Component } from 'react'

export default class Provider extends Component {
  constructor (props) {
    super(props)
    this.state = props.store.state()
    props.store.listen(this.setState.bind(this))
  }
  render () {
    const children = Children.map(this.props.children, (child) =>
      cloneElement(child, this.state))
    return createElement('div', null, ...children)
  }
}
