import { useNavigate } from "react-router-dom";
export function Signup() {
  const navigate=useNavigate();

  return (
    <>
      <h1>Sign Up </h1>
      <div className="main_page">
        <div className="login_page">
          <div>
            <img
              id="login_image"
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.2090071369.1707797469&semt=ais"
            />
          </div>
          <div className="forms">
            <form>
              <input
                type="text"
                placeholder="Enter your Mobile number"
                onChange={(e) => {
                  console.log("Mobile " + e.target.value);
                }}
                required
              />
              <br />
              <br />
              <input
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  console.log("email " + e.target.value);
                }}
                required
              />
              <br />
              <br />
              <input
                id="signpass"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  console.log("password " + e.target.value);
                }}
                required
              />
              <br />
              <br />
              <input
                id="cpass"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  console.log("confirm password " + e.target.value);
                }}
                required
              />
              <br />
              <br />
              <button id="signup_btn" type="submit">
                Signup
              </button>
              <br />
              <br />
            </form>
            <div className="change_route">
            <p>
              Already a user?
            </p>
            <p className="path" onClick={()=>navigate('/login')}>
            Login
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
