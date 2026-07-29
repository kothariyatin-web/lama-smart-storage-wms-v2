export function renderHeader(title, userEmail) {

    return `

        <header class="topbar">

            <h1>${title}</h1>

            <div class="user-area">

                <span>${userEmail}</span>

                <button
                    id="logoutBtn"
                    class="primary-btn"
                    style="margin-left:15px"
                >
                    Logout
                </button>

            </div>

        </header>

    `

}