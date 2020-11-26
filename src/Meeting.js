import "./Meeting.css";
import QRCode from "qrcode.react";
import PropTypes from "prop-types";

function Meeting(props) {
  const { meeting } = props;
  return (
    <li className="meeting-list-item">
      <div>
        <QRCode value={meeting.link} />
      </div>
      <div className="meeting-details">
        <p className="title">{meeting.course}</p>
        <p>{meeting.instructor}</p>
        <p>{meeting.time}</p>
        <p>
          <a href={meeting.link}>{meeting.link}</a>
        </p>
      </div>
      <button
        className="meeting-remove"
        onClick={() => props.onDeleteMeeting(meeting)}
      ></button>
    </li>
  );
}

export default Meeting;

Meeting.propTypes = {
  meeting: PropTypes.shape({
    _id: PropTypes.string,
    course: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteMeeting: PropTypes.func.isRequired,
};
