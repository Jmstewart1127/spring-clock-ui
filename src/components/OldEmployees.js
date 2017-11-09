import React from 'react';
import ReactTable from 'react-table';

const columns = [{
  Header: 'ID',
  accessor: 'id' // String-based value accessors!
}, {
  Header: 'Name',
  accessor: 'user' // String-based value accessors!
}, {
  Header: 'Pay Rate',
  accessor: 'payRate',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'totalPay', // Required because our accessor is not a string
  Header: 'Total Pay',
  accessor: 'totalPay' // Custom value accessors!
}, {
  Header: props => <span>Clock Status</span>, // Custom header components!
  accessor: 'clocked'
}];

const employeeData = [];

class Employees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: [],
      bizId: '',
      weekTimeInHours: '',
      payRate: '',
      totalPay: '',
      clocked: '',
      employees: [],
    }
  }

  getEmployees(id) {
    fetch('https://spring-clock.herokuapp.com/rest/employees/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        for (let i = 0; i < responseJson.length; i++) {
          employeeData.push(responseJson[i]);
          this.setState({
            employees: employeeData
          })
        }
        console.log(this.state.employees);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getEmployees(2);
  }

  test() {
    if (this.state.employees != undefined) {
      if (this.state.employees.clocked) {
        return "Clocked In";
      } else {
        return "Clocked Out";
      }
    }
  }

  getRows() {
    var data = [];
    for (let i = 0; i < this.state.employees.length; i++) {
      data.push(this.state.employees[i]);
    }
    return data;
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
        <ReactTable
          data = {this.getRows()}
          columns = {columns}
        />
      </div>
    );
  }

}

export default Employees
