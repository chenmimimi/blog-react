import React, { Component } from 'react';
require('./bottomNav.scss')

export default class BottomNav extends Component {
  render() {
    return (
      <div className="footer">
        <div className="width900">
            <p>
            © 2018 这是底部底部，这个人有点懒，只写一点，这里该有点内容。
            <a href="https://github.com/chenmimimi">[GITHUB SOURCE]</a></p>
        </div>
      </div>
    );
  }
}