import { useRef, useState } from "react";

export default function Login() {
  const [emialIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail, enteredPassword);

    const emailIsvalid = enteredEmail.includes("@");

    if (!emailIsvalid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(true);
  }
  // function handleEnteredInput(identifier, value) {
  //   setEnteredValue((prevValue) => ({
  //     ...prevValue,
  //     [identifier]: value,
  //   }));
  // }

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
            // onChange={(event) =>
            //   handleEnteredInput("email", event.target.value)
            // }
            // value={enteredValue.email}
            ref={email}
          />
          <div className="control-error">
            {emialIsInvalid && <p>Please Enter Valid Email Address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={(event) =>
            //   handleEnteredInput("password", event.target.value)
            // }
            // value={enteredValue.password}
            ref={password}
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
