// used in app.js to load some components lazily => checkout & orders & auth 
import React, { Component } from 'react';
/*asyncComponent function which takes a function as an input => importComponent, 
which it then executes down here this func will use this dynamic import syntax & then give us a promise 
where we eventually get the component 
we want it to load & where we then render this component */
const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }
    componentDidMount () {
      importComponent()
        .then(cmp => {
          this.setState({component: cmp.default});
        });
    }
    render () {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
}
export default asyncComponent;
