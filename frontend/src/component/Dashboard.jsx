import { useNavigate } from "react-router-dom"
import dummy from "./dummycourses";
export default function Dashboard(){
    const navigate=useNavigate();

    return(
        <div className="dashboard">
        <div className="homepage">
        <h1 id="dashboard_heading">Welcome to Edutech</h1>
        <div class="buttons">
            <button onClick={()=>navigate('/login')}>Login</button>
            <button onClick={()=>navigate('/signup')}>Sign Up</button>
            <button onClick={()=>navigate('/admin')}>Admin</button>
        </div>
        </div>
        <h2 id="courseheading">What would you like to <span id="highlight">learn?</span></h2>
        <div className="displayCourses">
            {
                dummy.map((course)=>(
                    <div key={course.id} className="span">
                        <img src={course.img}></img>
                        <h2 id="courseTitle">{course.title}</h2>
                        <h3 id="coursePrice">₹{course.price}</h3>
                        <div style={{"text-align":"center","margin-top":"6px"}}>
                        <button id="PurchaseBtn">Buy Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}