import { useContext } from "react";
import ListItem from "./ListItem";
import { UserContext } from "../context/UserContext";

// eslint-disable-next-line react/prop-types
const UserList = ({ searchedUsers }) => {
  const { data } = useContext(UserContext);

  return (
    <div className="list-container">
      {data.length === 0 && <p>No Users Found</p>}
      {/* render the user based on the user search */}
      {searchedUsers.length > 0
        ? searchedUsers.map((user) => <ListItem key={user.id} user={user} />)
        : data.map((user) => <ListItem key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
