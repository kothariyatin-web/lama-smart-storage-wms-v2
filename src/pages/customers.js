import { supabase } from "../services/supabase"

export async function showCustomers() {

    const { data: customers, error } =
        await supabase
            .from("customers")
            .select("*")
            .order("customer_code")

    if (error) {

        alert(error.message)
        return

    }

    let rows = ""

    customers.forEach(customer => {

        rows += `

        <tr>

            <td>${customer.customer_code}</td>
            <td>${customer.customer_name}</td>
            <td>${customer.mobile ?? ""}</td>
            <td>${customer.gstin ?? ""}</td>
            <td>${customer.active ? "Yes" : "No"}</td>

        </tr>

        `

    })

    document.querySelector(".content").innerHTML = `

        <header>

            <h1>Customer Master</h1>

            <button id="addCustomer">
                + Add Customer
            </button>

        </header>

        <div class="searchBox">

            <input
                id="searchCustomer"
                placeholder="Search customer..."
            >

        </div>

        <table class="customerTable">

            <thead>

                <tr>

                    <th>Code</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>GSTIN</th>
                    <th>Active</th>

                </tr>

            </thead>

            <tbody>

                ${rows}

            </tbody>

        </table>

    `

}