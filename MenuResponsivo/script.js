const burger = document.getElementsByClassName("burger")[0]
const header = document.getElementsByTagName("header")[0]

burger.addEventListener("click", () => {
  header.classList.toggle("active")
})