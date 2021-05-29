const body = document.getElementsByTagName("body")[0]
const li = document.getElementsByTagName("li")
const header = document.getElementsByTagName("header")[0]

const contextMenus = []

body.addEventListener("contextmenu", (e) => {
  e.preventDefault()
  cleanContextMenus()
  addNewContextMenu(calcPositionX(e.clientX), calcPositionY(e.clientY))
})

body.addEventListener("click", (e) => {
  cleanContextMenus()
})

function calcPositionX(click) {
  if (click + 180 > window.innerWidth) {
    return click - 180
  }
  return click
}

function calcPositionY(click) {
  if (click + 230 > window.innerHeight) {
    return click - 230
  }
  return click
}

function addNewContextMenu(posX, posY) {
  const id = Math.random() * 99999
  contextMenus.push(id)
  const menu = document.createElement("div")
  menu.id = id
  menu.className = "menu"
  menu.style = `top: ${posY}px; left: ${posX}px; border-radius: 20px; position: absolute;}`
  const ul = document.createElement("ul")
  ul.append(createLi("Copy"))
  ul.append(createLi("Paste"))
  ul.append(createLi("Cut"))
  const newItem = createLi("New -->")

  const submenu = document.createElement("div")
  submenu.id = id
  submenu.className = "menu submenu"
  submenu.style = `top: ${0}px; left: ${180}px; border-radius: 20px; position: absolute;}`
  const ul2 = document.createElement("ul")
  ul2.append(createLi("File"))
  ul2.append(createLi("Mail"))
  ul2.append(createLi("Folder"))
  submenu.appendChild(ul2)
  newItem.appendChild(submenu)
  ul.append(newItem)


  menu.append(ul)
  body.appendChild(menu)
}

function createLi(name) {
  const item = document.createElement("li")
  item.innerHTML = name
  console.log(name)

  item.addEventListener("click", (e) => {
    e.stopPropagation()
    header.innerText = name
    cleanContextMenus()
  })
  return item
}

function cleanContextMenus() {
  if (contextMenus.length) {
    document.getElementById(contextMenus[0]).remove()
    contextMenus.splice(0, 1)
  }
}