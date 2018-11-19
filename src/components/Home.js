import React, { Component } from 'react';
import { Progress, Button, Popconfirm, Icon, Tooltip, Slider, Badge, Spin, Alert, notification } from 'antd';

import 'antd/dist/antd.css';

var randomWords = require('random-words');

class Home extends Component {

  constructor(params) {
    super(params);
    let x = 0;
    let t = 30;
		this.state = { fetchInProgress: true, customersNo: '', target: t, percent: x };
	}

	componentDidMount() {
		this.loadCustomers();
	}

	loadCustomers = () => {
		fetch('https://customerrest.herokuapp.com/api/customers')
		.then(response => response.json())
		.then(responseData => {
      let x = Math.round((responseData.content.length * 100 / this.state.target) * 100)/100;
      this.setState({ fetchInProgress: false, customersNo: responseData.content.length, percent: x });
    })
  }

  handleTargetChange = (value) => {
    let x = Math.round((this.state.customersNo * 100 / value) * 100)/100;
    this.setState({ target: value , percent: x });
  }

  addCustomer = () => {
    function firstLetterUppercase(randomWord) {
      return randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
    }
    let newCustomer = {
      firstname: firstLetterUppercase(randomWords()),
      lastname: firstLetterUppercase(randomWords()),
      streetaddress: firstLetterUppercase(randomWords()) + ' ' + Math.floor((Math.random() * 99) + 10),
      postcode: Math.floor((Math.random() * 99999) + 10000),
      city: firstLetterUppercase(randomWords()),
      email: randomWords() + '@' + randomWords() + '.com',
      phone: Math.floor((Math.random() * 9999999999) + 1000000000)
    }
		fetch('https://customerrest.herokuapp.com/api/customers',
						{
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify(newCustomer)
						}
		)
		.then(response => {
			this.loadCustomers();
			notification.success({
				message: 'Task Complete!',
				description: 'A new customer was added to our database.'
			});
		})
  }

  getRandomCustomer = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
		.then(response => response.json())
		.then(responseData => {
      // because our backend provider did not expose the customer index directly
      // need to extract the index from the end of each returned link ;p
      let responseArray = [responseData.content];
      let indexArray = [];
      for (let i = 0; i < responseArray[0].length; i++) {
        let link = (responseArray[0][i].links[0].href);
        let index = link.substr(link.lastIndexOf('/') + 1);
        indexArray[i] = index;
      }
      // getting a random element from the index array
      let randomIndex = indexArray[Math.floor(Math.random()*indexArray.length)];
      // calling the Delete function with the random index
      this.deleteCustomer(randomIndex);
    })
  }

  deleteCustomer = (index) => {
		fetch(`https://customerrest.herokuapp.com/api/customers/${index}`, {method: 'DELETE'})
		.then(response => {
			this.loadCustomers();
			notification.success({
				message: 'Task Complete!',
				description: 'A random customer was kicked out.'
			});
		})
	}

  render() {
    return (
      <div style={{ marginTop: 40, marginLeft: "auto", marginRight: "auto", height: "80vh", maxWidth: "80vw" }}>
        <h1>Hello! I am T-Helper.</h1>
        <br />
        <h3>Because even the best personal trainers (such as yourself) need someone to rely on, I shall be your own personal little assistant.</h3>
        <h3>If you need more features or if I am not working properly, please contact my Creator and he will make me better in no time!</h3>
        <br /><br />
        {
          this.state.fetchInProgress ?
            <div>
              <Spin size="large" />
              <br /><br />
              <Alert
                message="Loading... please wait."
                description="Please allow up to 30 seconds for the Heroku dyno to wake up. The Customer-O-Meter&trade; will appear here shortly."
                type="info"
              />
            </div>
            :
            <div style={{ marginBottom: 40 }}>
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", padding: 10, marginLeft: "auto", marginRight: "auto", maxWidth: 500 }}>
                <div><b>Current</b> number of customers in the database = <Badge count={this.state.customersNo} style={{ backgroundColor: "#1890ff", boxShadow: "0 0 0 0" }} /></div>
                <div><b>Target</b> number of customers (adjust the slider below) = <Badge count={this.state.target} style={{ backgroundColor: "#52c41a", boxShadow: "0 0 0 0" }} /></div>
              </div>
              <br />
              <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 400 }}>
                <Slider
                  min={1}
                  max={50}
                  defaultValue={30}
                  onChange={this.handleTargetChange}
                />
              </div>
              <br />
              <Tooltip title="Instantly add a random customer" placement="left">
                <Popconfirm
                  title="Are you sure you want to create a new customer?"
                  placement="bottomRight"
                  okText="Yes - Insert random customer!"
                  onConfirm={() => this.addCustomer()}
                  icon={<Icon type="question-circle-o" style={{ color: 'green' }} />}
                >
                  <Button type="primary" shape="circle" size="large" icon="plus" style={{ marginRight: 20 }} />
                </Popconfirm>
              </Tooltip>
              <Progress type="circle" strokeWidth={9} percent={this.state.percent} />
              <Tooltip title="Instantly delete a random customer" placement="right">
                <Popconfirm
                  title="Are you sure you want to remove a customer?"
                  placement="bottomLeft"
                  okText="Yes - Delete random customer!"
                  okType="danger"
                  onConfirm={() => this.getRandomCustomer()}
                  icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                >
                  <Button type="danger" shape="circle" size="large" icon="minus" style={{ marginLeft: 20 }} />
                </Popconfirm>
              </Tooltip>
              <br /><br />
              <h3>Customer-O-Meter&trade;</h3>
            </div>
        }
      </div>
    );
  }
}

export default Home;