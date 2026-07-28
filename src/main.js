import './style.css'

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
            </div>

        </header>

        <section class="cards">

            <div class="card">
                <h3>Today's GRNs</h3>
                <p>0</p>
            </div>

            <div class="card">
                <h3>Pallets</h3>
                <p>0</p>
            </div>

            <div class="card">
                <h3>Warehouse Utilization</h3>
                <p>0%</p>
            </div>

            <div class="card">
                <h3>Available Locations</h3>
                <p>0</p>
            </div>

        </section>

    </main>

</div>
`