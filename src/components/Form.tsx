import React from "react";

const Form=()=>{
    return(


       <div className="testForm"> <form>
       <div className="form-group">
         <label className="formLabel">Username</label>
         <input type="username" className="form-control" id="exampleFormControlInput1" placeholder="username"/>
       </div>
       <div className="form-group">
         <label className="formLabel">Email address</label>
         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
       </div>
       <div className="form-group">
         <label className="formLabel">Gender </label>
         <select className="form-control" id="exampleFormControlSelect1">
           <option>Male</option>
           <option>Female</option>
           <option>Other</option>
         
         </select>
       </div>
       
       <div className="form-group">
         <label className="formLabel" >Bio</label>
         <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder="bio" ></textarea>
       </div>
     </form>  </div> 
        
)

}

export default Form;