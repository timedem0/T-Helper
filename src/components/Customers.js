import React, { Component } from 'react';
import ReactTable from 'react-table';
import moment from 'moment';
import { Button, Icon, Popconfirm, Tooltip, Drawer, notification } from 'antd';

import 'react-table/react-table.css';
import 'antd/dist/antd.css';

import SaveCustomer from './SaveCustomer.js';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 4,
});

class Customers extends Component {

	constructor(params) {
		super(params);
		this.state = {visible: false, customers: [], trainings: []};
	}

	componentDidMount() {
		this.listCustomers();
	}

	listCustomers = () => {
		fetch('https://customerrest.herokuapp.com/api/customers')
		.then(response => response.json())
		.then(responseData => {
			this.setState({customers: responseData.content})
		})
	}

	saveCustomer = (customer) => {
		fetch('https://customerrest.herokuapp.com/api/customers',
						{
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify(customer)
						}
		)
		.then(response => {
			this.listCustomers();
			notification.success({
				message: 'Task Complete!',
				description: 'The customer was added to our database.'
			});
		})
	}

	renderEditable = (cellInfo) => {
		return (
			<div
				style={{ backgroundColor: "#fafafa" }}
				contentEditable
				suppressContentEditableWarning
				onBlur={e => {
					const data = [...this.state.customers];
					data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
					this.setState({ customers: data });
				}}
				dangerouslySetInnerHTML={{
					__html: this.state.customers[cellInfo.index][cellInfo.column.id]
				}}
			/>
		);
	}

	updateCustomer = (customer, link) => {
		fetch(link,
					{
					method: 'PUT',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(customer)
					}
		)
		.then(response => {
			this.listCustomers();
			notification.success({
				message: 'Task Complete!',
				description: 'The customer was updated successfully.'
			});
		})
	}

	deleteCustomer = (link) => {
		fetch(link, {method: 'DELETE'})
		.then(response => {
			this.listCustomers();
			notification.success({
				message: 'Task Complete!',
				description: 'The customer was deleted successfully.'
			});
		})
	}

	showTrainings = (value) => {
		fetch(value + '/trainings', { method: "GET" })
		.then(response => response.json())
		.then(responseData => {
			this.setState({visible: true, trainings: responseData.content})
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
			columns: [{
				Header: 'Activity',
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
						{moment(row.original.date).format('D MMM, H:mm')}
					</div>;
				}
			}]
		}];
		
		const columnsCustomers = [{
			Header: <SaveCustomer saveCustomer={this.saveCustomer} />,
			columns: [{
				Header: 'First Name',
				accessor: 'firstname',
				Cell: this.renderEditable
			}, {
				Header: 'Last Name',
				accessor: 'lastname',
				Cell: this.renderEditable
			}, {
				Header: 'Trainings',
				accessor: 'links.0.href',
				filterable: false,
				sortable: false,
				Cell: ({value}) => {
					return <div>
						<Tooltip title="Customer Training Quick View">
							<Button shape="circle" icon="user" size="small" onClick={() => this.showTrainings(value)} />
						</Tooltip>
					</div>;
				}
			}]
		}, {
			Header: 'Location',
			columns: [{
				Header: 'Street',
				accessor: 'streetaddress',
				Cell: this.renderEditable
			}, {
				Header: 'Post Code',
				accessor: 'postcode',
				Cell: this.renderEditable
			}, {
				Header: 'City',
				accessor: 'city',
				Cell: this.renderEditable
			}]
		}, {
			Header: 'Contact',
			columns: [{
				Header: 'Email',
				accessor: 'email',
				Cell: this.renderEditable
			}, {
				Header: 'Phone',
				accessor: 'phone',
				Cell: this.renderEditable
			}]
		}, {
			Header: 'Control',
			maxWidth: 110,
			columns: [{
				Header: 'Edit / Delete',
				accessor: 'links.0.href',
				filterable: false,
				sortable: false,
				maxWidth: 110,
				Cell: ({row, value}) => {
					return <div>
						<Button.Group>
							<Popconfirm
								title="Are you sure you want to Update this Customer?"
								placement="left"
								okText="Yes - Save changes"
								onConfirm={() => this.updateCustomer(row, value)}
							>
								<Button type="primary" icon="save" size="small" />
							</Popconfirm>
							<Popconfirm
								title="Are you sure you want to Delete this Customer?"
								placement="topRight"
								okText="Yes - Delete customer"
								okType="danger"
								onConfirm={() => this.deleteCustomer(value)}
								icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
							>
								<Button type="primary" icon="delete" size="small" />
							</Popconfirm>
						</Button.Group>
					</div>;
				}
			}]
		}]

    return (
      <div style={{ marginTop: 40, marginBottom: 100, marginLeft: "auto", marginRight: "auto", height: "80vh", maxWidth: "90vw" }}>
        <h1>Customer List</h1>
				<Drawer
          title="Trainings"
          width={360}
          placement="left"
          onClose={this.closeDrawer}
          maskClosable={false}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
						overflow: 'auto',
						textAlign: 'center',
            paddingBottom: 53
          }}
        > 
          <ReactTable
						data={this.state.trainings}
						columns={columnsTrainings}
						sortable={true}
						defaultPageSize={15}
						showPagination={false}
						showPageJump={false}
					/>
        </Drawer>
				<ReactTable 
					data={this.state.customers}
					columns={columnsCustomers}
					sortable={true}
					filterable defaultFilterMethod={this.filterMethod}
					defaultPageSize={10}
				/>
      </div>
    );
  }
}

export default Customers;