/* eslint no-console:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import RightNav from './RightNav';
import { Home } from './Home';

const links = [
  {
    active: 0,
    title: 'Home',
    component: Home
  },
];

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      component: Home
    }
  }

  handleGetComponent = (component) => {
    this.setState({ component });
  }

  renderComponent = (component) => {
    switch(component) {
      case 'Home':
        return <Home />;
        break;
      case 'Fam':
        return <Fam />;
        break;
      case 'SignUp':
        return <SignUp />;
        break;
      default:
        return <Home />;
        break;
    }
  }

  render() {
    const Component = this.state.component;
    return (
      <div className="application">
        <RightNav links={links} getComponent={this.handleGetComponent} />
        <div className="application__container">
          {this.renderComponent(Component)}
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement('div')),
  )
});
