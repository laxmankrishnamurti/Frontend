const router = function (e) {
    const eventProp = e || window.event
    eventProp.preventDefault()
    window.history.pushState({}, "", event.target.href)
    findLocation()
}

const routePages = {
    404: '/client-side-routing/pages/404.html',
    '/': '/client-side-routing/pages/home.html',
    '/about': '/client-side-routing/pages/about.html',
    '/services': '/client-side-routing/pages/service.html',
    '/carrer': '/client-side-routing/pages/carrer.html',
    '/contact': '/client-side-routing/pages/contact.html'
}

const findLocation = function () {
    const path = window.location.pathname;
    loadPage(routePages[path] || routePages[404])
}

const loadPage = async (path) => {
    console.log('pathname from loadpage', path)
    await fetch(path)
        .then((response) => {
            console.log('Response :', response)
            return response.text()
        })
        .then((data) => {
            renderPage(data)
        })
        .catch((error) => {
            console.error('Error while fetching pathPage', error)
        })
}

const renderPage = function (page) {
    const content = document.querySelector('.main-container')
    content.innerHTML = page
}

window.onpopstate = loadPage
window.route = router
loadPage()