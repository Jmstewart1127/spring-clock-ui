import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Delete from 'material-ui-icons/Delete';
import Done from 'material-ui-icons/Done';
import FileUpload from 'material-ui-icons/FileUpload';
import KeyboardVoice from 'material-ui-icons/KeyboardVoice';
import Save from 'material-ui-icons/Save';
import Timer from 'material-ui-icons/Timer';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class ClockInAndOutButton extends React.Component {
  constructor(props) {
    super(props);
  }
  clockInAndOut(id) {
    fetch('https://spring-clock.herokuapp.com/rest/web/clock/in/' + id)
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { id } = this.props;
    var test = () => {
      this.props.id["0"].forEach((element) => {
        console.log(element);
        this.clockInAndOut(element);
      });
    }
    return (
      <div>
        <Button
          className={classes.button} raised color="primary"
          onClick={test}
        >
          Clock In/Out
          <Timer className={this.props.classes.rightIcon} />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ClockInAndOutButton);