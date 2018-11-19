import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

import 'antd/dist/antd.css';

class About extends Component {

  render() {
    return (
      <div style={{marginTop: 40, marginLeft: "auto", marginRight: "auto", height: "80vh", maxWidth: "80vw" }}>
        <h1>T-Helper</h1>
        <div style={{ backgroundColor: "white", padding: 30, marginLeft: "auto", marginRight: "auto", maxWidth: 700 }}>
          <p>ReactJS School Project</p>
          <br />
          <Timeline pending="Waiting on teacher feed-back" mode="alternate">
            <Timeline.Item dot={<Icon type="poweroff" style={{ fontSize: '20px', color: 'green' }} />}>Project starts based on <b>REST API</b> and back-end documentation provided</Timeline.Item>
            <Timeline.Item color="blue"><b>React App</b> and general project plan</Timeline.Item>
            <Timeline.Item color="blue">Component: <b>React-Router</b>, navigation</Timeline.Item>
            <Timeline.Item color="blue">Component: <b>React-Table</b>, data display</Timeline.Item>
            <Timeline.Item color="blue">Component: <b>Big-Calendar</b>, timed events</Timeline.Item>
            <Timeline.Item color="blue">Component: <b>Moment</b>, data formating</Timeline.Item>
            <Timeline.Item dot={<Icon type="ant-design" style={{ fontSize: '20px', color: 'red' }} />}>Library: <b>Ant Design</b>, front end design</Timeline.Item>
            <Timeline.Item color="blue">Component: <b>Random-Words</b>, new test customer</Timeline.Item>
            <Timeline.Item dot={<Icon type="setting" style={{ fontSize: '20px', color: 'orange' }} />}>Technical testing and deployment</Timeline.Item>
          </Timeline>
          <Icon type="mail" theme="twoTone" /> tudor.<span style={{display: 'none'}}>foo</span>nica@myy.haaga-helia.fi
        </div>
      </div>
    );
  }
}

export default About;