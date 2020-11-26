import "./ListMeetings.css";
import Search from "./Search.js";
import Meeting from "./Meeting.js";
import { Component } from "react";
import { Link } from "react-router-dom";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import PropTypes from "prop-types";

class ListMeetings extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({ query });
    console.log(this.state.query);
  };

  render() {
    const query = this.state.query.trim();
    let meetings = [];
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      meetings = this.props.meetings.filter(
        (m) =>
          match.test(m.course) || match.test(m.instructor) || match.test(m.time)
      );
    } else {
      meetings = this.props.meetings;
    }

    meetings.sort(sortBy("course"));

    return (
      <div className="list-meetings">
        <div className="list-meetings-top">
          <Search query={this.state.query} updateQuery={this.updateQuery} />
          <Link to="/create" className="add-meeting" />
        </div>
        <ol className="meeting-list">
          {meetings.map((meeting, index) => (
            <Meeting
              meeting={meeting}
              key={index}
              onDeleteMeeting={this.props.onDeleteMeeting}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default ListMeetings;

ListMeetings.propTypes = {
  meetings: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      course: PropTypes.string.isRequired,
      instructor: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteMeeting: PropTypes.func.isRequired,
};
