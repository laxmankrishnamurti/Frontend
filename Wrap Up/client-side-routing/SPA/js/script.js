function loadPage(page) {

    // Remove previously loaded scripts
    document.querySelectorAll('script').forEach(script => {
        script.remove();
    });


    const mainContent = document.querySelector('.main-content')
    const pages = `contentPages/${page}.html`

    fetch(pages)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Page not found')
            }
            return response.text()
        })
        .then((data) => {
            mainContent.innerHTML = data

            const jsPage = `js/${page}.js`
            return fetch(jsPage)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('JS page not found')
            }
            return response.text()
        })
        .then((data) => {
            const script = document.createElement('script')
            script.textContent = data
            document.body.appendChild(script)
        })
        .catch((error) => {
            console.error('Error while fetching page', error)
            mainContent.innerHTML = `<h2>The page you are looking for is not exist</h2>`
        })
}