import "./Search.css";
import PropTypes from "prop-types";

function Search(props) {
  const { query, updateQuery } = props;
  return (
    <input
      className="search-meetings"
      type="text"
      placeholder="search"
      value={query}
      onChange={(event) => updateQuery(event.target.value)}
    />
  );
}

export default Search;

Search.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func.isRequired,
};
