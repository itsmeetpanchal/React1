import React, { useEffect, useState } from 'react'

function Register() {
    const [Email, setEmail] = useState("")
    const [Username, setUsername] = useState("")
    const [Password, SetPassword] = useState("")
    const [comPassword, SetcomPassword] = useState("")
    const [userData, setUserdata] = useState("")

    useEffect(() => {
        fetch("http://localhost:1100/users", {

        })
            .then((res) => { return res.json() })
            .then((data) => { setUserdata(data) })
    }, [])

    const userdata = { Email, Username, Password }
    const handalsubmit = (e) => {
        e.preventDefault()

        if (Email == "" || Username == "" || Password == "") {
            alert("Fill all fildes......")
        }
        else if (Password != comPassword) {
            alert("Password and Confirm password dose not match.....")
            SetPassword("")
            SetcomPassword("")
        }
        else {
            const sameemail = userData.filter((v) => { return v.Email == Email })

            if (sameemail.length > 0) {
                alert("This email alredy exist.....!")
            }

            else {

                fetch("http://localhost:1100/users", {
                    method: "post",
                    header: { "content-type": "application/json" },
                    body: JSON.stringify(userdata)
                })
                    .then((res) => {
                        res.json()
                        alert('you are Register.......')
                        setEmail("")
                        setUsername("")
                        SetPassword("")
                        SetcomPassword("")
                    })
            }
        }




    }



    return (
        <div>
            <form onSubmit={handalsubmit}>
                <label>Email: <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} /></label>
                <label>Username: <input type="text" value={Username} onChange={(e) => { setUsername(e.target.value) }} /></label>
                <label>Password: <input type="password" value={Password} onChange={(e) => { SetPassword(e.target.value) }} /></label>
                <label>Confirm Password: <input type="password" value={comPassword} onChange={(e) => { SetcomPassword(e.target.value) }} /></label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register
