import React from 'react';
import ReactTable from 'react-table';

const columns = [{
  Header: 'Name',
  accessor: 'user' // String-based value accessors!
}, {
  Header: 'Pay Rate',
  accessor: 'payRate',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'totalPay', // Required because our accessor is not a string
  Header: 'totalPay',
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
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getEmployees(2);
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
        <table>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </tbody>
        </table>
        <ReactTable
          data = {this.state.employees}
          columns = {columns}
        />
        <p></p>
      </div>
    );
  }

}

export default Employees
