import React, { useEffect, useState } from 'react'

function Login() {

    const [Username, setUsername] = useState("")
    const [Password, SetPassword] = useState("")
    const [Data,SetData] = useState()

    useEffect(()=>{
        fetch("http://localhost:1100/users")
        .then((res) => { return res.json() })
        .then((data) => {
            SetData(data)
        }) 
    },[])

    const handleLogin=(e)=>{
        e.preventDefault()

        Data.map((v)=>{

            if (v.Username == Username) {

                if (v.Password == Password) {

                    alert("you are login........!")
                    setUsername("")
                    SetPassword("")
                }
                else if (v.Password != Password) {
                    alert("username or Password are Invalid...!")
                }
                else {
                    alert("username or Password are Invalid...!")
                }
            }


            else if (Username == "") {
                alert("username or Password are Invalid...!")
            }
            else {
                alert("username or Password are Invalid...!")
            }

        })



    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username: <input type="text" value={Username} onChange={(e) => { setUsername(e.target.value) }} /></label>
                <label>Password: <input type="password" value={Password} onChange={(e) => { SetPassword(e.target.value) }} /></label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
