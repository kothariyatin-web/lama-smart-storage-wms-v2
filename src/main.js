import "./style.css"

import { supabase } from "./services/supabase"

import { showLogin } from "./pages/login"
import { showDashboard } from "./pages/dashboard"
import { showCustomers } from "./pages/customers"

import { renderSidebar } from "./components/sidebar"
import { renderHeader } from "./components/header"

async function startApp() {

    const {
        data: { session }
    } = await supabase.auth.getSession()

    if (!session) {
        showLogin()
        return
    }

    renderApp(session.user.email)

}

function renderApp(userEmail) {

    document.querySelector("#app").innerHTML = `

        <div class="app">

            ${renderSidebar("dashboard")}

            <div class="main">

                ${renderHeader("Dashboard", userEmail)}

                <div class="content"></div>

            </div>

        </div>

    `

    loadPage("dashboard", userEmail)

    document.querySelectorAll(".nav-btn").forEach(button => {

        if (button.disabled) return

        button.addEventListener("click", () => {

            loadPage(button.dataset.page, userEmail)

            document.querySelectorAll(".nav-btn")
                .forEach(b => b.classList.remove("active"))

            button.classList.add("active")

            document.querySelector(".topbar h1").textContent =
                button.textContent.trim()

        })

    })

}

async function loadPage(page, userEmail) {

    const content = document.querySelector(".content")

    switch (page) {

        case "dashboard":
            await showDashboard(content, userEmail)
            break

        case "customers":
            await showCustomers(content)
            break

        default:
            content.innerHTML = "<h2>Coming Soon</h2>"

    }

}

startApp()