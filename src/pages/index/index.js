import React, { Component } from 'react';
import TopNav from '../../components/top-nav/TopNav'
import BottomNav from '../../components/bottom-nav/BottomNav'
import ArticleList from './articleList';
import ExtraDetail from './extraDetail'
require('./index.scss')
export default class Index extends Component {
  render() {
    return (
      <div className='index-page'>
        <TopNav active='index'/>
        <div className="width900 article clear">
          <ArticleList/>
          <ExtraDetail/>
          <div className="width900 photo clear">
          </div>
        </div>
        <BottomNav/>
      </div>
    );
  }
}