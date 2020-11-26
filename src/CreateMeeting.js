import { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CreateMeeting.css";

class CreateMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      instructor: "",
      time: "",
      link: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.onCreateMeeting(this.state);
    event.preventDefault();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Link to="/" className="close-create-meeting" />
        <form className="create-meeting-form" onSubmit={this.handleSubmit}>
          <div className="create-meeting-details">
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={this.state.course}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={this.state.instructor}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Meeting Times"
              value={this.state.time}
              onChange={this.handleChange}
            />
            <input
              type="url"
              name="link"
              placeholder="Meeting Link"
              value={this.state.link}
              onChange={this.handleChange}
            />
            <button>Add Meeting</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateMeeting);

CreateMeeting.propTypes = {
  onCreateMeeting: PropTypes.func.isRequired,
};
