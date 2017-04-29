const { h, cloneElement, Component } = require('preact')

module.exports = class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = props.store.state
    props.store.on('change', this.setState.bind(this)) 
    props.store.on('error', console.error.bind(console)) 
   }
  render() {
    const children = this.props.children.map((child) => 
      cloneElement(child, this.state))
    return h('div', null, ...children)
  }
}