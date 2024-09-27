
const form = document.querySelector("#form")
const scriptURL = 'https://script.google.com/macros/s/AKfycbx3e4zTQaOnAKZNM6i10WpT8TOx3QpzDZgWbW88XbVaP6VPryBt5jRfufrmARPZmcIO/exec'

form.addEventListener('submit', e => {
    e.preventDefault()

    const responseBody = new FormData(form)
    const TrendBody = responseBody.getAll("Roles").join(" ")
    responseBody.set('Roles', TrendBody)
    fetch(scriptURL, { method: 'POST', body: responseBody })
        .then(response => { alert('Success!', response) })
        .catch(error => alert('Error!', error.message))
})