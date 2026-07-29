export function renderSidebar(activePage) {
    return `
        <aside class="sidebar">

            <div class="logo">
                <h2>Lama Smart Storage</h2>
                <span>WMS v1.0</span>
            </div>

            <nav>

                <button class="nav-btn ${activePage === "dashboard" ? "active" : ""}" data-page="dashboard">
                    🏠 Dashboard
                </button>

                <button class="nav-btn ${activePage === "customers" ? "active" : ""}" data-page="customers">
                    👥 Customers
                </button>

                <button class="nav-btn" disabled>📦 Products</button>
                <button class="nav-btn" disabled>🏢 Warehouse</button>
                <button class="nav-btn" disabled>📍 Locations</button>
                <button class="nav-btn" disabled>🚚 GRN</button>
                <button class="nav-btn" disabled>📥 Putaway</button>
                <button class="nav-btn" disabled>📊 Inventory</button>
                <button class="nav-btn" disabled>🚛 Dispatch</button>
                <button class="nav-btn" disabled>📈 Reports</button>

            </nav>

            <div class="sidebar-footer">
                Lama Smart Storage WMS<br>
                Version 1.0
            </div>

        </aside>
    `
}