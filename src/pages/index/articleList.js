import React, { Component } from 'react';
require('./articleList.scss')
export default class ArticleList extends Component {
  render() {
    return (
      <div className="left70">
        <ul className="detail">
          <li className="detail-item">
            <a href="/detail/19/ViVO,OPPO在JS中设置transform无法正确应用问题.html" className="title">标题标题标题标题</a>
            <p className="info">
                <span className="category">tag</span>
                <span className="viewpoint">
                88<br/>
                阅读量
                </span>
                <span className="datetime">2018-12-12</span>
            </p>
          </li>
        </ul>
        <a href="/article-list" className="more">查看更多文章&gt;&gt;</a>
      </div>
    )
  }
    
}