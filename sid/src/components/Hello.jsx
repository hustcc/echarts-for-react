import React from 'react'
import PropTypes from 'prop-types'
import './Hello.css'

const Hello = ({ msg }) => (
  <div id='Hello'>
    <h2>{msg}</h2>
  </div>
)

Hello.prototype.propTypes = {
  msg: PropTypes.string
}

export default Hello
