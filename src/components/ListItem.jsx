import { useState, useContext } from "react";
import Modal from "./Modal";
import EditUser from "./EditUser";
import { UserContext } from "../context/UserContext";

// eslint-disable-next-line react/prop-types
const ListItem = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPortal, setShowPortal] = useState(false);

  // get the dispatch function from the context
  const { dispatch } = useContext(UserContext);

  // handle function to delete user
  const handleDelete = () => {
    dispatch({
      type: "DELETE_USER",
      payload: user.id,
    });
  };

  //   handle function to update user
  const handleUpdate = (id, updatedUser) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { id, updatedUser },
    });
  };

  return (
    <div className="listItem">
      <div
        className="avatar"
        onClick={() => {
          setShowModal(true);
          setSelectedUser(user);
        }}
      >
        <img
          src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          alt="User Avatar"
        />
      </div>
      <div
        className="details"
        onClick={() => {
          setShowModal(true);
          setSelectedUser(user);
        }}
      >
        <h2 className="userName">{user.name}</h2>
        <p style={{ maxWidth: "94%", overflow: "hidden" }}>{user.email}</p>
        <p> {user.phone}</p>
      </div>
      <div className="button-conatiner">
        <button
          onClick={() => {
            setShowModal(true);
            setShowPortal(true);
            setSelectedUser(user);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete()}
          style={{ backgroundColor: "#de564e" }}
        >
          Delete
        </button>
      </div>
      {showModal && (
        <Modal>
          {!showPortal ? (
            <div className="card">
              <div className="avatar">
                <img
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  alt="User Avatar"
                />
              </div>
              <div className="card-details">
                <h2 className="userName">{selectedUser.name}</h2>
                <p>{selectedUser.email}</p>
                <p> {selectedUser.phone}</p>
              </div>
              <span className="para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                </p>
              </span>
              <div className="buttons">
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          ) : (
            <EditUser
              currentUser={selectedUser}
              updateUser={handleUpdate}
              showfunc={{ setShowModal, setShowPortal }}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default ListItem;
