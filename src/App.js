import { Component } from "react";
import ListMeetings from "./ListMeetings.js";
import { Route, Switch } from "react-router";
import * as ZirectoryApi from "./ZirectoryApi.js";
import CreateMeeting from "./CreateMeeting.js";

class App extends Component {
  state = {
    meetings: [],
  };

  componentDidMount() {
    ZirectoryApi.getAll().then((meetings) => this.setState({ meetings }));
  }

  removeMeeting = (meeting) => {
    this.setState((state) => {
      return {
        meetings: state.meetings.filter((m) => m._id !== meeting._id),
      };
    });

    ZirectoryApi.remove(meeting._id);
  };

  addMeeting = (meeting) => {
    ZirectoryApi.add(meeting).then((m) =>
      this.setState({
        meetings: this.state.meetings.concat(m),
      })
    );
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
