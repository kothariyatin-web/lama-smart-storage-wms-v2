import { supabase } from './services/supabase'
import { showLogin } from './pages/login'
import './style.css'

async function startApp() {

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) {

    showLogin()
    return

  }

  showDashboard()

}

function showDashboard() {

  document.querySelector('#app').innerHTML = `

  <div class="app">

    <aside class="sidebar">

      <h2>LAMA WMS</h2>

      <ul>
        <li class="active">🏠 Dashboard</li>
        <li>📥 Inward</li>
        <li>🏢 Warehouse</li>
        <li>🚚 Dispatch</li>
        <li>📷 QR Scan</li>
        <li>🌡 Temperature</li>
        <li>📊 Reports</li>
        <li>⚙ Administration</li>
      </ul>

    </aside>

    <main class="content">

      <header>

        <h1>Lama Smart Storage WMS</h1>

        <div class="user">

          Administrator

          <button id="logoutButton">
            Logout
          </button>

        </div>

      </header>

      <section class="cards">

        <div class="card">
          <h3>Today's GRNs</h3>
          <p id="grnCount">0</p>
        </div>

        <div class="card">
          <h3>Pallets</h3>
          <p id="palletCount">0</p>
        </div>

        <div class="card">
          <h3>Warehouse Utilization</h3>
          <p>0%</p>
        </div>

        <div class="card">
          <h3>Available Locations</h3>
          <p id="locationCount">0</p>
        </div>

      </section>

    </main>

  </div>

  `

  document
    .getElementById("logoutButton")
    .addEventListener("click", logout)

  loadDashboard()

}

async function loadDashboard() {

  const customers = await supabase
    .from("customers")
    .select("*")

  console.log("Customers", customers)

  const pallets = await supabase
    .from("pallets")
    .select("*")

  console.log("Pallets", pallets)

  const locations = await supabase
    .from("locations")
    .select("*")

  console.log("Locations", locations)

  const grns = await supabase
    .from("grns")
    .select("*")

  console.log("GRNs", grns)

  document.getElementById("grnCount").innerHTML =
    grns.data ? grns.data.length : 0

  document.getElementById("palletCount").innerHTML =
    pallets.data ? pallets.data.length : 0

  document.getElementById("locationCount").innerHTML =
    locations.data ? locations.data.length : 0

}

async function logout() {

  await supabase.auth.signOut()

  location.reload()

}

startApp()