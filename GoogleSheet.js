const scriptURL = 'https://script.google.com/macros/s/AKfycbwvrg7gdqlHzuFMngp1BtolLSMVBIQMe3HFCxVD1HOXK0CxqSmtxXO7ofufJo4JiE0K/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error("Error!", error.message))
})