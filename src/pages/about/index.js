import React, { Component } from 'react';
import TopNav from '../../components/top-nav/TopNav'
import BottomNav from '../../components/bottom-nav/BottomNav'
require('./index.scss')
export default class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <TopNav active='about'/>
        <div className='main'></div>
        <BottomNav/>
      </div>
    );
  }
}