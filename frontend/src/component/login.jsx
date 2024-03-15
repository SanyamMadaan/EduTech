import { Signup } from "./Signup";
import { useNavigate } from "react-router-dom";

export function Login() {
const navigate=useNavigate();
  return (
    <>
      <h1>Login </h1>
      <div className="main_page">
        <div className="login_page">
          <div>
            <img
              id="login_image"
              src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?size=626&ext=jpg"
            />
          </div>
          <div className="forms">
            <form>
              <input
                type="text"
                placeholder="Enter email/contact"
                onChange={(e) => {
                  console.log("email/conatct " + e.target.value);
                }}
                required
              />
              <br />
              <br />
              <input
                id="pass"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  console.log("Password " + e.target.value);
                }}
                required
              />
              <br />
              <br />
              <button id="login_btn" type="submit">
                Login
              </button>
              <br />
              <br />
            </form>
            <div className="change_route">
            <p>
              New user? 
              </p>
              <p className="path" onClick={()=>{
               navigate('/Signup')
              } }>
              Create Account
              
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
