// toggle navigation button for tablet and phone

const skill = document.querySelector('.skill')
const ul = document.querySelector(".nav")
const toggle = document.querySelectorAll(".toggle")
const icons = document.querySelector(".icons")
const li = document.querySelectorAll(".li")

const toggleClick = () => {
    toggle.forEach(icon => icon.classList.toggle("hide"))

    ul.classList.toggle("nav-hide")
}
icons.addEventListener('click', toggleClick)

li.forEach(li => li.addEventListener('click', toggleClick))











