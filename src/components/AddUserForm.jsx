import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // get the dispatch function from the context
  const { dispatch } = useContext(UserContext);

  // validate email
  const validateEmail = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email)) {
      document.getElementById("alerts").innerHTML = "";
      return true;
    } else {
      document.getElementById("alerts").innerHTML = "Invalid Email";
      return false;
    }
  };
  // validate phone number
  const validatePhone = () => {
    const regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g;
    if (regex.test(phone)) {
      document.getElementById("alerts").innerHTML = "";
      return true;
    } else {
      document.getElementById("alerts").innerHTML = "Invalid Phone Number";
      return false;
    }
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the form inputs
    if (validateEmail() && validatePhone()) {
      dispatch({
        type: "ADD_USER",
        payload: {
          id: Math.floor(Math.random() * 10000),
          name,
          email,
          phone,
        },
      });
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Enter e-mail"
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail();
          }}
          required
        />
        <input
          type="text"
          value={phone}
          placeholder="Enter phone"
          maxLength={10}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <input
          type="submit"
          value="Add User"
          style={{ backgroundColor: "skyblue", marginBottom: "5px" }}
        />
      </form>
      <span
        id="alerts"
        style={{ color: "red", fontSize: "10px", marginBottom: "5px" }}
      ></span>
    </>
  );
};

export default AddUserForm;
