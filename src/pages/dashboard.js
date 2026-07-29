import { supabase } from "../services/supabase"

export async function showDashboard(container) {

    const [
        customers,
        pallets,
        locations,
        grns
    ] = await Promise.all([

        supabase.from("customers").select("*", { head: true, count: "exact" }),
        supabase.from("pallets").select("*", { head: true, count: "exact" }),
        supabase.from("locations").select("*", { head: true, count: "exact" }),
        supabase.from("grns").select("*", { head: true, count: "exact" })

    ])

    container.innerHTML = `

        <div class="cards">

            <div class="card">
                <h3>Customers</h3>
                <h2>${customers.count || 0}</h2>
            </div>

            <div class="card">
                <h3>Pallets</h3>
                <h2>${pallets.count || 0}</h2>
            </div>

            <div class="card">
                <h3>Locations</h3>
                <h2>${locations.count || 0}</h2>
            </div>

            <div class="card">
                <h3>Today's GRNs</h3>
                <h2>${grns.count || 0}</h2>
            </div>

        </div>

    `
}