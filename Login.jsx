const Login = () => {
  // const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        {/* <div className="text"> {action} </div> */}
        <div className="text"> Sign Up </div>

        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img className="img" src="login/u.jpeg" alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img className="img" src="login/email.jpeg" alt="" />
          <input type="email" placeholder="Email_id" />
        </div>
        <div className="input">
          <img className="img" src="login/pw.jpeg" alt="" />
          <input type="pw" placeholder="Password" />
        </div>
      </div>
      <div className="forgotpw">
        Lost password ? <span>Click here</span>
      </div>

      <div className="submit-container">
        {/* <div className={action === "Login" ? "Submit gray " : "Submit"}> */}
        <div className="submit">Sign Up</div>
        {/* <div className={action === "Sign Up" ? "Submit gray " : "Submit"}> */}
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default Login;
