"use client";

import { useState } from "react";

export default function Login(){
    const [username, setUsername] = useState("");

    const onClickLogin = () => {}

    const onClickToggle = () => {}

    const onClickLogout = () => {}

    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <button>Login</button>
            <br />
            <button>Logout</button>
            <br />

            <button>Toggle Moderator Status</button>
        </div>
    )
}