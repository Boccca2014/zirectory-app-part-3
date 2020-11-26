import { Component } from "react";
import ListMeetings from "./ListMeetings.js";
import { Route, Switch } from "react-router";
import axios from "axios";
import CreateMeeting from "./CreateMeeting.js";

class App extends Component {
  state = {
    meetings: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4567/api/meetings")
      .then((response) => this.setState({ meetings: response.data.data }))
      .catch((err) => console.log(err));
  }

  removeMeeting = (meeting) => {
    this.setState((state) => {
      return {
        meetings: state.meetings.filter((m) => m._id !== meeting._id),
      };
    });

    axios
      .delete(`http://localhost:4567/api/meetings/${meeting._id}`)
      .catch((err) => console.log(err));
  };

  addMeeting = (meeting) => {
    axios
      .post("http://localhost:4567/api/meetings", meeting)
      .then((response) =>
        this.setState({
          meetings: this.state.meetings.concat(response.data.data),
        })
      )
      .catch((err) => console.log(err));
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
