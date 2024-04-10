import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from './Footer'

function Register() {

    const navigate = useNavigate()
    const [Username, setUsername] = useState("")
    const [Password, SetPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [confirmPass, setConfirmpass] = useState("")
    const [contectNum, setContectnum] = useState("")
    const [userData, setUserdata] = useState("")

    useEffect(() => {
        fetch("http://localhost:1100/users", {

        })
            .then((res) => { return res.json() })
            .then((data) => { setUserdata(data) })
    }, [])






    const userdata = { Username, Password, Email, contectNum }
    const handalsubmit = (e) => {
        e.preventDefault()


        if (Username == "" || Password == "" || Email == "" || contectNum == "") {
            toast.error("Fill all inputes... !");
        }
        else if (Password !== confirmPass) {
            toast.error("Password and Confirm Password Dose Not Match...!");
            SetPassword("")
            setContectnum("")
        }
        else {
            const sameemail = userData.filter((v) => { return v.Email == Email })
            // console.log(sameemail)
            if (sameemail.length > 0) {
                toast.error("This Email is allready Exist...!");
            }
            else {
                fetch("http://localhost:1100/users", {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(userdata)

                })
                    .then((res) => {
                        if (res) {
                            toast.success("Login Successfully....!")
                        }
                        navigate('/')
                    })


            }

        }
    }









    return (
        <div>
            <section className="vh-100 ">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handalsubmit}>
                                <h1>Register</h1>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter User name" value={Username} onChange={(e) => { setUsername(e.target.value) }} />
                                    <label className="form-label" >User name</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                                    <label className="form-label" >Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" value={Password} onChange={(e) => { SetPassword(e.target.value) }} />
                                    <label className="form-label" >Password</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter Confirm Password" value={confirmPass} onChange={(e) => { setConfirmpass(e.target.value) }} />
                                    <label className="form-label" >Confirm Password</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter Contect Number" value={contectNum} onChange={(e) => { setContectnum(e.target.value) }} />
                                    <label className="form-label" >User Contect Number</label>
                                </div>


                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={'/login'}
                                        className="link-danger">Login</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}


export default Register
