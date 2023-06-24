import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setSearchedUsers }) => {
  const [searchInput, setSearchInput] = useState("");

  // get the data from the context
  const { data } = useContext(UserContext);

  //   filter the users based on the search input
  useEffect(() => {
    if (searchInput === "") {
      setSearchedUsers([]);
    }
    if (searchInput !== "") {
      const searchedUsers = data.filter((user) => {
        return user.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchedUsers(searchedUsers);
    }
  }, [searchInput]);

  //   closing the search results when clicked outside the search bar
  document.getElementById("root").addEventListener("click", () => {
    setSearchInput("");
  });

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        {searchInput === "" ? (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#54656f" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#54656f" }}
            onClick={() => setSearchInput("")}
          />
        )}
        <input
          type="text"
          name="search"
          value={searchInput}
          autoComplete="off"
          placeholder="Search Users"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
