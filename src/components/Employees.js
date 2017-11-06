import React from 'react';

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

  myObj() {
    console.log(employeeData[1].user);
  }

  getEmployees(id) {
    let employees = [];
    fetch('https://spring-clock.herokuapp.com/rest/employees/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        for (let i = 0; i < responseJson.length; i++) {
          employeeData.push(responseJson[i]);
          console.log(employeeData[i]);
        }
        this.setState({
          employees: employeeData
        })
        console.log(employeeData[0]);
        this.myObj();
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
        <p>{this.state.employees[0]}</p>
      </div>
    );
  }

}

export default Employees
