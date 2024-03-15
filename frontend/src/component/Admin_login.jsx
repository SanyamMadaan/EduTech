export function Admin_login(){
    return(
    <div className="admin_page">
        <div>
     <h2 style={{color:"white"}}>Welcome back admin</h2><br/>
     </div>
     <div className="admin_login">
     <form autoFocus>
        <input type="Email" placeholder="Email"></input>
        <input id="admin_eye" type="password" placeholder="Password please"></input>
        <button>Login</button>
        <p id="admin_pass">Forgot Password</p>
     </form>
     </div>
    </div>
    )
}