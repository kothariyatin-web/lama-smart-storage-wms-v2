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

    loadPage("dashboard")

    // Sidebar Navigation
    document.querySelectorAll(".nav-btn").forEach(button => {

        if (button.disabled) return

        button.addEventListener("click", () => {

            const page = button.dataset.page

            document
                .querySelectorAll(".nav-btn")
                .forEach(btn => btn.classList.remove("active"))

            button.classList.add("active")

            const title = button.textContent.replace(/[^\w\s]/g, "").trim()

            document.querySelector(".topbar h1").textContent = title

            loadPage(page)

        })

    })

    // Logout
    document
        .getElementById("logoutBtn")
        ?.addEventListener("click", async () => {

            await supabase.auth.signOut()

            location.reload()

        })

}

async function loadPage(page) {

    const content = document.querySelector(".content")

    switch (page) {

        case "dashboard":
            await showDashboard(content)
            break

        case "customers":
            await showCustomers(content)
            break

        default:
            content.innerHTML = `
                <h2>Coming Soon</h2>
                <p>This module is under development.</p>
            `
    }

}

startApp()