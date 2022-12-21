const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".links--mobile")

const toggleMenu = e => {
  console.log("ToggleMenu is running")
  mobileMenu.classList.toggle("links--show")
}

hamburger.addEventListener("click", toggleMenu)
