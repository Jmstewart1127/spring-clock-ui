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

  test() {
    if (employeeData.length > 0) {
      return (
        <tr>
          {this.state.employees.map(function (item, index) {
            return <td>{item.user} {item.payRate} </td>
          })}
        </tr>
      );
    } else {
      return <tr><td>hi</td></tr>
    }
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
            {this.test()}
          </tbody>
        </table>
        <p></p>
      </div>
    );
  }

}

export default Employees
