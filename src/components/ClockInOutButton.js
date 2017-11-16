import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
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
  clockInAndOut = id => {
    fetch('https://spring-clock.herokuapp.com/rest/web/clock/in/' + id)
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { classes, func, id } = this.props;
    var test = () => {
      this.props.id["0"].forEach((element) => {
        console.log(element);
        this.clockInAndOut(element);
      });
      this.props.func;
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