import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = theme => ({
  Task: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  TaskContent: {
    paddingTop: "24px",
    paddingBottom: "24px"
  }
});

class NoTask extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.Task}>
        <CardContent className={classes.TaskContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            No task. Let's add new task!
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(NoTask);