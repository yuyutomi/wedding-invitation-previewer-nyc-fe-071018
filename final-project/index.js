const nameOne = document.getElementById("name-one")
const nameTwo = document.getElementById("name-two")
const lastName = document.getElementById("last-name")
const date = document.getElementById("date")
const venue = document.getElementById("location")
let nameOneInvite = document.getElementById("name-one-invite")
let nameTwoInvite = document.getElementById("name-two-invite")
let lastNameInvite = document.getElementById("last-name-invite")
let dateInvite = document.getElementById("date-invite")
let locationInvite = document.getElementById("location-invite")

// Print typed in content
nameOne.addEventListener("keyup", event => {
  nameOneInvite.innerHTML = nameOne.value
})
nameTwo.addEventListener("keyup", (event) => {
  nameTwoInvite.innerHTML = nameTwo.value
})
lastName.addEventListener("keyup", (event) => {
  lastNameInvite.innerHTML = lastName.value
})
date.addEventListener("keyup", (event) => {
  dateInvite.innerHTML = date.value
})
venue.addEventListener("keyup", (event) => {
  locationInvite.innerHTML = venue.value
})

// Update colors based on options 
function formal() {
  document.getElementsByClassName("invitation").classList.add("formal") 
	invitation.classList.remove("spring")
  invitation.classList.remove("artDeco")
}
function spring() {
  document.getElementsByClassName("invitation").classList.add("spring")
  invitation.classList.remove("formal")
  invitation.classList.remove("artDeco") 
}
function artDeco() {
  document.getElementsByClassName("invitation").classList.add("artDeco")
  invitation.classList.remove("formal")
  invitation.classList.remove("spring") 
}

// const nameOne = document.getElementById("name-one")
// const nameTwo = document.getElementById("name-two")
// const lastName = document.getElementById("last-name")
// const date = document.getElementById("date")
// const venue = document.getElementById("location")
// let nameOneInvite = document.getElementById("name-one-invite")
// let nameTwoInvite = document.getElementById("name-two-invite")
// let lastNameInvite = document.getElementById("last-name-invite")
// let dateInvite = document.getElementById("date-invite")
// let locationInvite = document.getElementById("location-invite")

// // Print typed in content
// nameOne.addEventListener("keyup", event => {
//   nameOneInvite.innerHTML = nameOne.value
// })
// nameTwo.addEventListener("keyup", (event) => {
//   nameTwoInvite.innerHTML = nameTwo.value
// })
// lastName.addEventListener("input", (event) => {
//   lastNameInvite.innerHTML = lastName.value
// })
// date.addEventListener("input", (event) => {
//   dateInvite.innerHTML = date.value
// })
// venue.addEventListener("input", (event) => {
//   locationInvite.innerHTML = venue.value
// })

// // Update colors based on options

// function formal() {
//   document.getElementById("invitation").classList.add("formal")
//   invitation.classList.remove("spring")
//   invitation.classList.remove("artDeco") 
// }
// function spring() {
//   document.getElementById("invitation").classList.add("spring")
//   invitation.classList.remove("formal")
//   invitation.classList.remove("artDeco") 
// }
// function artDeco() {
//   document.getElementById("invitation").classList.add("artDeco")
//   invitation.classList.remove("formal")
//   invitation.classList.remove("spring") 
// }