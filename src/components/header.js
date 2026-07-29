export function renderHeader(title, userEmail) {
    return `
        <header class="topbar">

            <div>
                <h1>${title}</h1>
            </div>

            <div class="user-area">
                ${userEmail}
            </div>

        </header>
    `
}