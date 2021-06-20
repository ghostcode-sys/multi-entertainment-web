import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import signimg from '../images/download.png';
import signb from '../images/signb.png';

function Signup() {
    let history = useHistory();
    const [userDetail,setuserDetail] = useState({
        uname:"",
        fname:"",
        lname:"",
        phone:"",
        mail:"",
        passwd:"",
        cpasswd:""
    })
    const [passcheck,setpasscheck] = useState("");
    const[passwdvis,setpasswdvis ] = useState("password");
    const tooglepass = () => {
        passwdvis === "password"? setpasswdvis("text"):setpasswdvis("password") ;
    };

    const handleSubmit = async (e) => {
        const {uname,fname,lname,phone,mail,passwd,cpasswd } = userDetail;
        e.preventDefault();
        if(passwdch()){
            const res = await fetch("/server_signup",{
                method ="POST",
                headers={
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({                                                                     
                       uname,fname,lname,phone,mail,passwd,cpasswd                                     
                })
            });
            const data = await res.json();
            if (data.status === 422 || !data){
                window.alert("invalid registration");
            }else{
            window.alert('registeration successful');
            history.push("/")
            }
        }
        
    }

    
    let name , value ;
    

    const handleInputs = (e) =>{
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setuserDetail({...userDetail,[name]:value});
        passwdch();
    }

    const passwdch = () => {
        if(userDetail.passwd !== "" && userDetail.cpasswd !== ""){
            if (userDetail.passwd !== userDetail.cpasswd){
                setpasscheck ("passwords does not match");
                return false;
            }
            else{
                setpasscheck("password matched");
                return true;
            }
        } 
    }


    return (
        <div className="container_form">
        <h1>SIGN UP</h1>
        <div className="box_form">
            <form className="signup" onSubmit={handleSubmit} method="POST">
                <input type="text" name="fname" onChange={handleInputs} value={userDetail.fname} autoComplete="off" placeholder="First name"/>
                <input type="text" name="lname" onChange={handleInputs} value={userDetail.lname} autoComplete="off" placeholder="Last name"/>
                <input type="tel" name="phone" onChange={handleInputs} value={userDetail.contact} autoComplete="off" placeholder="Contact no."/>
                <input type="email" name="mail" onChange={handleInputs} value={userDetail.mail} autoComplete="off" placeholder="Email Address"/>
                <input type="text" name="uname" onChange={handleInputs} value={userDetail.username} autoComplete="off" placeholder="User name"/>
                <input type={passwdvis} name="passwd" onChange={handleInputs} value={userDetail.passwd} autoComplete="off" placeholder="Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                <span><input type="checkbox" onClick={tooglepass} />Show Password</span>
                <input type={passwdvis} name="cpasswd" onChange={handleInputs} value={userDetail.cpasswd} autoComplete="off" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                <span><input type="checkbox" onClick={tooglepass} />Show Password</span>
                <i>{passcheck}</i>
                <button type="submit" value="Submit"><img src={signb} alt="Sign in "/></button>
            </form>
            <img src={signimg} alt="man with phone" />
        </div>
    </div>
    )
}

export default Signup
