import React, { Component } from 'react';
import TopNav from '../components/top-nav/TopNav'
import BottomNav from '../components/bottom-nav/BottomNav'
export default class Index extends Component {
  render() {
    return (
      <div className='index'>
        <TopNav active='index'/>
        index
        <BottomNav/>
      </div>
    );
  }
}