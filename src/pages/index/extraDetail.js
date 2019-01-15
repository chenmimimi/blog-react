

import React, { Component } from 'react';
require('./extraDetail.scss')
export default class ExtraDetail extends Component {
  render() {
    return (
      <div className="rightDetail">
        <p className="title">
            热门文章
        </p>
        <ul className="link">
          <li>
            0. <a href="baidu.com">这是标题标题标题标题</a>
          </li>
        </ul>
        {/* <p className="title">
          友情链接
        </p>
        <ul className="link">
          <li><a href="http://github.com/chenmimimi">一个蜜</a></li>
        </ul>
        <p className="title">
            扫码赞助
        </p> */}
        <p className="price">
        </p>
      </div>
    )
  } 
}