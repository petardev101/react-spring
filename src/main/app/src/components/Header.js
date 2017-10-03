import React from 'react'
import logo from '../logo.jpg'

export default () => (
  <header className='tc pv4 pv5-ns bg-light-blue .db p'>
    <img src={logo} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
    <h1 className='f5 f4-ns fw6'>Matt Larson</h1>
    <h2 className='f6 gray fw2 i ttu tracked'>Twin Cities based Full Stack Software Engineer</h2>
  </header>
)