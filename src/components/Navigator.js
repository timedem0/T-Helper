import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import 'antd/dist/antd.css';

class Navigator extends Component {

  render() {
    return (
     
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />Home</Link>
        </Menu.Item>
        <Menu.Item key="customers">
          <Link to="/customers"><Icon type="idcard" theme="twoTone" twoToneColor="#e2ba14" />Customers</Link>
        </Menu.Item>
        <Menu.Item key="trainings">
          <Link to="/trainings"><Icon type="folder-open" theme="twoTone" twoToneColor="#e2ba14" />Trainings</Link>
        </Menu.Item>
        <Menu.Item key="calendar">
          <Link to="/calendar"><Icon type="schedule" theme="twoTone" twoToneColor="#52c41a" />Calendar</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about"><Icon type="profile" theme="twoTone" />About</Link>
        </Menu.Item>
      </Menu>
      
    );
  }
}

export default Navigator;