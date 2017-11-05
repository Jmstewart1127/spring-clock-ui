import React from 'react';

class Employees extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: '',
      bizId: '',
      weekTimeInHours: '',
      payRate: '',
      totalPay: '',
      clocked: '',
    }
  }

  getEmployees(id) {
    fetch('https://spring-clock.herokuapp.com/rest/employees/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          user: responseJson["0"].user,
          bizId: responseJson["0"].bizId,
          weekTimeInHours: responseJson["0"].weekTimeInHours,
          payRate: responseJson["0"].payRate,
          totalPay: responseJson["0"].totalPay,
          clocked: responseJson["0"].clocked,
        });
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
        <h1>Hi</h1>
        <h3>{this.state.user}</h3>
      </div>
    );
  }
}

export default Employees
