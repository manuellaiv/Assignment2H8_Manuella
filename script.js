var nama = document.getElementById("nama")
var role = document.getElementById("role")
var availability = document.getElementById("availability")
var usia = document.getElementById("usia")
var lokasi = document.getElementById("lokasi")
var pengalaman = document.getElementById("pengalaman")
var email = document.getElementById("email")

submitButton = document.getElementById("submit-button")
editButton = document.getElementById("edit-button")
formcontainer = document.getElementById("form-container")

function onEdit(){
    console.log("onedit")
    formcontainer.style.display = "block"
}

function onSubmit(){
    console.log("onsubmit")
    var nama_form = document.getElementById("nama-form").value
    var role_form = document.getElementById("role-form").value
    var availability_form = document.getElementById("availability-form").value
    var usia_form = document.getElementById("usia-form").value
    var lokasi_form = document.getElementById("lokasi-form").value
    var pengalaman_form = document.getElementById("pengalaman-form").value
    var email_form = document.getElementById("email-form").value

    nama.innerHTML = nama_form
    role.innerHTML = role_form
    availability.innerHTML = availability_form
    usia.innerHTML = usia_form
    lokasi.innerHTML = lokasi_form
    pengalaman.innerHTML = pengalaman_form
    email.innerHTML = email_form

    formcontainer.style.display = "none"

    event.preventDefault()
}