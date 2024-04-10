import React, { useState } from 'react'
import { users } from './users'

function Search() {


    const [search, Setsearch] = useState("")

    return (
        <div>

            <input type="text" value={search} onChange={(e)=>{Setsearch(e.target.value)}} />

            {users.filter((v) => (v.name.toLowerCase().includes(search)))
                .map((v) => (
                    <li key={v.id}>{v.name}</li>
                ))

            }

        </div>
    )
}

export default Search
