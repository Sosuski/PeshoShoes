import "../styles/login.css";
import { useRef } from "react";

const Login = () => {
  const username = useRef();
  const password = useRef();

  async function HandleSubmit(event) {
    ("here");
    event.preventDefault();
    let response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    });
    response = await response.json();
    console.log(response)
    localStorage.setItem("auth_token", response.token.token); // make an if incase the login is wrong
    return false;
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          HandleSubmit(event);
          return event.preventDefault();
        }}
      >
        <div className="card glass">
          <div className="card-body">
            <h2 className="card-title">Log In</h2>
            <input
              ref={username}
              type="text"
              placeholder="username"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="card-actions justify-end">
              <input
                type="submit"
                className="btn btn-primary"
                value="Submit"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
