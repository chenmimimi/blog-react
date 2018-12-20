import React, { Component } from 'react';
require('./topNav.scss')

export default class TopNav extends Component {
  render() {
    const { active } = this.props
    const navData = [
      {
        title: '首页',
        path: '/',
        type: 'index',
        index: 0,
      // },{
      //   title: '文章',
      //   path: '/',
      //   type: 'article',
      //   index: 1,
      },{
        title: '关于我',
        path: '/',
        type: 'about',
        index: 2,
      }
    ]
    return (
      <div className='top-nav'>
        <div className='width900'>
          <div className="logo">一个蜜</div>
          <ul>
            {navData.map(item => (
              <li className={active === item.type ? 'action' : ''}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}