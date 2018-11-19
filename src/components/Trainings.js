import React, { Component } from 'react';
import ReactTable from 'react-table';
import moment from 'moment';
import { Button, Icon, Popconfirm, notification } from 'antd';

import 'react-table/react-table.css';
import 'antd/dist/antd.css';

import SaveTraining from './SaveTraining.js';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 4,
});

class Trainings extends Component {

	constructor(params) {
		super(params);
		this.state = {visible: false, trainings: [], properTrainingList: []};
  }

  componentDidMount() {
    this.listTrainings();
  }

  listTrainings = () => {
		fetch('https://customerrest.herokuapp.com/gettrainings')
		.then(response => response.json())
		.then(responseData => {
			this.setState({trainings: responseData});
			this.makeProperList();
		})
	}

	// because the backend allows trainings to be added to NULL customers
	// and students often do this, in development phase
	// there is a need to create a proper training list
	makeProperList = () => {
		let trainingArray = [];
		for (let i = 0; i < this.state.trainings.length; i++) {
			if (this.state.trainings[i].customer !== null) {
				trainingArray[i] = {
					id: this.state.trainings[i].id,
					activity: `${this.state.trainings[i].activity}`,
					date: new Date(this.state.trainings[i].date),
					duration: `${this.state.trainings[i].duration}`,
					customer: `${this.state.trainings[i].customer.firstname} ${this.state.trainings[i].customer.lastname}`,
					location: `${this.state.trainings[i].customer.streetaddress} ${this.state.trainings[i].customer.city}`
				}
			}
    }
    this.setState({ properTrainingList: [...trainingArray] });
	}
	
	saveTraining = (customer) => {
		fetch('https://customerrest.herokuapp.com/api/trainings',
						{
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify(customer)
						}
		)
		.then(response => {
			this.listTrainings();
			notification.success({
				message: 'Task Complete!',
				description: 'The training was added to the customer.'
			});
		})
	}

	deleteTraining = (value) => {
    fetch(`https://customerrest.herokuapp.com/api/trainings/${value}`, { method: "DELETE" })
      .then(response => {
        this.listTrainings();
				notification.success({
					message: 'Task Complete!',
					description: 'The training was deleted successfully.'
				});
      })
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
	
	filterMethod = (filter, row) => {
    const id = filter.id
    return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
  };
  
  render() {

		const columnsTrainings = [{
			Header: <SaveTraining saveTraining={this.saveTraining} />,
			columns: [{
				Header: 'Training',
				accessor: 'activity'
			}, {
				Header: 'Duration',
				accessor: 'duration'
			}, {
				Header: 'Date',
				accessor: 'date',
				filterable: false,
				Cell: row => {
					return <div>
						{moment(row.date).format('D MMM, H:mm')}
					</div>;
				}
			}]
		},	{
			Header: 'Customer',
			columns: [{
				Header: 'Name',
        accessor: 'customer'
			}, {
				Header: 'Location',
        accessor: 'location'
			}]
		}, {
			Header: 'Control',
			maxWidth: 110,
			columns: [{
				Header: 'Delete',
				accessor: 'id',
				maxWidth: 110,
				filterable: false,
				sortable: false,
				Cell: ({value}) => {
					return <div>
						<Popconfirm
							title="Are you sure you want to Delete this Training?"
							placement="topRight"
							okText="Yes - Delete training"
							okType="danger"
							onConfirm={() => this.deleteTraining(value)}
							icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
						>
							<Button type="primary" icon="delete" size="small" />
						</Popconfirm>
					</div>;
				}
			}]
		}];

    return (
      <div style={{ marginTop: 40, marginBottom: 100, marginLeft: "auto", marginRight: "auto", height: "80vh", maxWidth: "90vw" }}>
        <h1>Trainings List</h1>
				<ReactTable 
					data={this.state.properTrainingList}
					columns={columnsTrainings}
					sortable={true}
					filterable defaultFilterMethod={this.filterMethod}
					defaultPageSize={10}
				/>
      </div>
    );
  }

}

export default Trainings;