import React, { Component } from 'react';
import { Drawer, Button, Col, Row, Input, Icon } from 'antd';

import 'antd/dist/antd.css';

class SaveCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false,  firstname: '', lastname: '', streetaddress: '', postcode:'', city:'', email:'', phone:'' };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  saveCustomer = () => {
    const newCustomer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      streetaddress: this.state.streetaddress,
      postcode: this.state.postcode,
      city: this.state.city,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.saveCustomer(newCustomer);
    this.setState({ visible: false, firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: '' })
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  closeDrawer = () => {
    this.setState({
      visible: false
    });
  };
  
  render() {

    return(
      <div>
        <Button size="small" type="primary" onClick={this.showDrawer}>
          Add New Customer
        </Button>
        <Drawer
          title="New Customer"
          width={360}
          placement="right"
          onClose={this.closeDrawer}
          maskClosable={false}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53
          }}
        > 
          <Row>
            <Input.Group>
              <Col span={12}><Input placeholder="First Name" name="firstname" onChange={this.handleChange} value={this.state.firstname} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} required />} /></Col>
              <Col span={12}><Input placeholder="Last Name" name="lastname" onChange={this.handleChange} value={this.state.lastname} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} /></Col>
            </Input.Group>
          </Row>
          <br />
          <Row>
              <Input.TextArea rows={4} placeholder="Address" name="streetaddress" onChange={this.handleChange} value={this.state.streetaddress} />
          </Row>
          <br />
          <Row>
            <Input.Group>
              <Col span={12}><Input placeholder="Postcode" name="postcode" onChange={this.handleChange} value={this.state.postcode}/></Col>
              <Col span={12}><Input placeholder="City" name="city" onChange={this.handleChange} value={this.state.city} /></Col>
            </Input.Group>
          </Row>
          <br />
          <Row>
              <Input placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
          </Row>
          <br />
          <Row>
              <Input placeholder="Phone" name="phone" addonBefore="+358" onChange={this.handleChange} value={this.state.phone} />
          </Row>
          <br />
          <Row style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}>
            <Button style={{ marginRight: 8 }} onClick={this.closeDrawer}>Cancel</Button>
            <Button type="primary" onClick={this.saveCustomer}>Save</Button>
          </Row>
        </Drawer>
			</div>

    );
  }
}

export default SaveCustomer;