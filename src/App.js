import { Component } from "react";
import ListMeetings from "./ListMeetings.js";
import { Route, Switch } from "react-router";
import CreateMeeting from "./CreateMeeting.js";

class App extends Component {
  state = {
    meetings: [],
  };

  removeMeeting = (meeting) => {
    this.setState((state) => {
      return {
        meetings: state.meetings.filter((m) => m._id !== meeting._id),
      };
    });
  };

  addMeeting = (meeting) => {
    this.setState({
      meetings: this.state.meetings.concat(meeting),
    });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <ListMeetings
            meetings={this.state.meetings}
            onDeleteMeeting={this.removeMeeting}
          />
        </Route>
        <Route path="/create">
          <CreateMeeting onCreateMeeting={this.addMeeting} />
        </Route>
      </Switch>
    );
  }
}

export default App;
