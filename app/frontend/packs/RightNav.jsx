// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>RightNav React</div> at the bottom
// of the page.

import React from 'react'
import PropTypes from 'prop-types'

import './RightNav.css';

const RightNav = ({ getComponent, links }) => (
  <nav className="right-nav">
    {links.map(l => <div key={l.active} onClick={() => getComponent(l.component)}>{l.title}</div>)}
  </nav>
)

RightNav.defaultProps = {
  active: 0,
  links: []
}

RightNav.propTypes = {
  active: PropTypes.number,
  links: PropTypes.array
}

export default RightNav;
