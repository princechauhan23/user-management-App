import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const EditUser = ({ currentUser, updateUser, showfunc }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
    }
  }, [currentUser]);

  // validate email
  const validateEmail = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email)) {
      document.getElementById("alert").innerHTML = "";
      return true;
    } else {
      document.getElementById("alert").innerHTML = "Invalid Email";
      return false;
    }
  };
  // validate phone number
  const validatePhone = () => {
    const regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g;
    if (regex.test(phone)) {
      document.getElementById("alert").innerHTML = "";
      return true;
    } else {
      document.getElementById("alert").innerHTML = "Invalid Phone Number";
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (validateEmail() && validatePhone()) {
      updateUser(currentUser.id, { id: currentUser.id, name, email, phone });
    }

    showfunc.setShowModal(false);
    showfunc.setShowPortal(false);
  };

  return (
    <div className="form-container" style={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Enter e-mail"
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail();
          }}
        />
        <input
          type="text"
          value={phone}
          placeholder="Enter phone"
          maxLength={10}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <div className="buttons">
          <button
            onClick={() => {
              showfunc.setShowModal(false);
              showfunc.setShowPortal(false);
            }}
          >
            Cancle
          </button>
          <button type="submit">Update</button>
        </div>
        <p
          id="alert"
          style={{ color: "red", fontSize: "10px", marginBottom: "10px" }}
        ></p>
      </form>
    </div>
  );
};

export default EditUser;
