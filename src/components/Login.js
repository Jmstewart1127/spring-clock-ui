import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import purple from 'material-ui/colors/purple';
import { createStore } from 'redux';
import login from '../reducers/login';
import Button from 'material-ui/Button';
import loginUser from '../actions/index';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

const store = createStore(login);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      weight: '',
      userId: '',
      loggedIn: false,
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserId = (username, password) => {
    fetch('https://spring-clock.herokuapp.com/rest/login/' + username + '/' + password)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          userId: responseJson.id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit(event) {
    this.getUserId(this.state.username, this.state.password);
    event.preventDefault();
    setTimeout(() => { localStorage.setItem('id', this.state.userId); }, 500);
    this.setState({
      loggedIn: true,
    })
  };

  handleLogOut = () => {
    localStorage.setItem('id', 'undefined');
    this.setState({
      loggedIn: false,
    });
  };

  componentWillMount() {
    console.log(localStorage.getItem('id'));
  }

  render() {
    if (localStorage.getItem('id') === 'undefined') {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className={styles.container}>
            <FormControl className={styles.formControl}>
              <InputLabel
                FormControlClasses={{
                  focused: styles.inputLabelFocused,
                }}
                htmlFor="custom-color-input"
              >
                Username
              </InputLabel>
              <Input
                styles={{
                  inkbar: styles.inputInkbar,
                }}
                id="custom-color-input"
                value={this.state.value}
                onChange={this.handleChange('username')}
              />
            </FormControl>
            <FormControl className={styles.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={this.handleClickShowPasssword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <input type="submit" value="Submit" />
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <Button
            onClick={this.handleLogOut}
          >
            Logout
          </Button>
        </div>
      );
    }
  }
}

export default Login