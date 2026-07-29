import { supabase } from "../services/supabase"

export async function showCustomers(container) {

    const { data: customers, error } = await supabase
        .from("customers")
        .select("*")
        .order("customer_code")
console.log("Customers:", customers)
console.log("Error:", error)
    if (error) {
        container.innerHTML = `<p>${error.message}</p>`
        return
    }

    renderTable(container, customers)

    document
        .getElementById("customerSearch")
        .addEventListener("input", e => {

            const search = e.target.value.toLowerCase()

            const filtered = customers.filter(c =>
                (c.customer_code || "").toLowerCase().includes(search) ||
                (c.customer_name || "").toLowerCase().includes(search) ||
                (c.mobile || "").toLowerCase().includes(search) ||
                (c.gstin || "").toLowerCase().includes(search)
            )

            renderTable(container, filtered)

        })

}

function renderTable(container, rows) {

    container.innerHTML = `

        <div class="page-header">

            <h2>Customers</h2>

            <button class="primary-btn">
                + Add Customer
            </button>

        </div>

        <input
            id="customerSearch"
            class="search-box"
            placeholder="Search customers..."
        >

        <table class="data-table">

            <thead>

                <tr>

                    <th>Code</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Mobile</th>
                    <th>GSTIN</th>
                    <th>Status</th>

                </tr>

            </thead>

            <tbody>

                ${rows.map(customer => `

                    <tr>

                        <td>${customer.customer_code ?? ""}</td>

                        <td>${customer.customer_name ?? ""}</td>

                        <td>${customer.contact_person ?? ""}</td>

                        <td>${customer.mobile ?? ""}</td>

                        <td>${customer.gstin ?? ""}</td>

                        <td>${customer.active ? "🟢 Active" : "🔴 Inactive"}</td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `

}