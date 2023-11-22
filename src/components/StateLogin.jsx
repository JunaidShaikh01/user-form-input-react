import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emialISValid = didEdit.email && !enteredValue.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
  }
  function handleEnteredInput(identifier, value) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInpurBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInpurBlur("email")}
            onChange={(event) =>
              handleEnteredInput("email", event.target.value)
            }
            value={enteredValue.email}
          />
          <div className="control-error">
            {emialISValid && <p>Please Enter Valid Email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleEnteredInput("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
