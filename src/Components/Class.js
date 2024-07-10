import React from 'react';

import  { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being constructed');
  }

  static getDerivedStateFromProps(props, state) 
  {
    console.log('getDerivedStateFromProps: Syncing state and props');
    return null; // Return updated state based on props
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should the component update?');
    return true; // Return false to prevent re-rendering
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture some information before update');
    return null; // Return a value which will be passed to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render: Component is rendering');
    return (
      <div>
        <h1>React Lifecycle Methods</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;


