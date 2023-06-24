import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [searchedUsers, setSearchedUsers] = useState([]);

  return (
    <div className="App">
      <header>User Management Application</header>
      <div className="main-section">
        <div className="form-container">
          <AddUserForm />
        </div>
        <div className="right-panel">
          <SearchBar setSearchedUsers={setSearchedUsers} />
          <UserList searchedUsers={searchedUsers} />
        </div>
      </div>
    </div>
  );
}

export default App;
