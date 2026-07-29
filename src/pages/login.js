import { supabase } from '../services/supabase'

export function showLogin() {

    document.querySelector('#app').innerHTML = `

    <div class="login-container">

        <div class="login-card">

            <h1>LAMA WMS</h1>

            <p>Please sign in</p>

            <input
                id="email"
                type="email"
                placeholder="Email"
            >

            <input
                id="password"
                type="password"
                placeholder="Password"
            >

            <button id="loginButton">
                Login
            </button>

            <p id="message"></p>

        </div>

    </div>
    `

    document
        .getElementById("loginButton")
        .addEventListener("click", login)

}

async function login() {

    const email =
        document.getElementById("email").value

    const password =
        document.getElementById("password").value

    const { error } =
        await supabase.auth.signInWithPassword({

            email,
            password

        })

    if (error) {

        document.getElementById("message").innerHTML =
            error.message

    }
    else {

        location.reload()

    }

}