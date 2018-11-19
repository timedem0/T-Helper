import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'antd/dist/antd.css';

const localizer = BigCalendar.momentLocalizer(moment)

class MyCalendar extends Component {

  constructor(props) {
    super(props);
    this.state = { trainings: [], events: [] };
  }

  componentDidMount() {
    this.loadTrainings();
  }

  loadTrainings = () => {
		fetch('https://customerrest.herokuapp.com/gettrainings')
		.then(response => response.json())
		.then(responseData => {
      this.setState({trainings: responseData});
      this.createEventList();
    })
  }

  createEventList = () => {
    let eventArray = [];
      for (let i = 0; i < this.state.trainings.length; i++) {
        if (this.state.trainings[i].customer !== null) {
          eventArray[i] = {
            title: `${this.state.trainings[i].activity} with ${this.state.trainings[i].customer.firstname} ${this.state.trainings[i].customer.lastname}`,
            start: new Date(this.state.trainings[i].date),
            end: new Date(this.state.trainings[i].date + (this.state.trainings[i].duration * 60000)),
            allDay: false
          }
        }
      }
    this.setState({ events: [...eventArray] });
  }

  render() {
    return (
      <div style={{ marginTop: 40, marginBottom: 100, marginLeft: "auto", marginRight: "auto", height: "80vh", maxWidth: "80vw" }}>
        <h1>Trainings Calendar</h1>
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          defaultDate={new Date()}
          views={['month', 'day', 'week']}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default MyCalendar;