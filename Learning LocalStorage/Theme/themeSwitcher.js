const theme = document.getElementById('theme')

let getTheme = localStorage?.getItem("theme")
handleTheme(getTheme)

theme.addEventListener('click', (e) => {
    localStorage.setItem("theme", e.target.value)
    handleTheme(e.target.value)
})

function handleTheme(value) {
    if (value === 'light') {
        document.body.style.backgroundColor = 'antiquewhite'
        document.body.style.color = 'black'
        theme.value = value
    } else if (value === 'dark') {
        document.body.style.backgroundColor = '#242424'
        document.body.style.color = 'antiquewhite'
        theme.value = value
    } else {
        document.body.style.backgroundColor = '#ffffff'
    }
}

window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        theme.value = e.newValue
        handleTheme(e.newValue)
    }
})


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type]
        let x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
    } catch (e) {
        return e instanceof DOMException && (
            //everything except firefox
            e.code === 22 ||
            //firefox
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
        ) && (storage && storage.length !== 0);
    }
}

if (storageAvailable('localstorage')) {
    console.log("LocalStorage is working in this browser")
} else {
    console.log("Ooops..... LocalStorage is not working in this browser")
}