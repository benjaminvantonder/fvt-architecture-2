//first let's get all the buttons for the navigation

let Home_Btn = document.getElementById("home-btn");
let About_Btn = document.getElementById("about-btn");
let Services_Btn = document.getElementById("services-btn");
let Projects_Btn = document.getElementById("projects-btn");
let Contact_Btn = document.getElementById("contact-btn");
let Contact_Btn_Bottom = document.getElementById("contact-btn-bottom");
let Contact_Btn_Services = document.getElementById("contact-btn-services");
let Contact_Btn_Projects = document.getElementById("contact-btn-projects");
let Services_btn_About = document.getElementById("services-btn-on-about");

// now let's link the ids of the pages

let Home_Page = document.getElementById("home-page");
let About_Page = document.getElementById("about-page");
let Services_Page = document.getElementById("services-page");
let Projects_Page = document.getElementById("projects-page");
let Contact_Page = document.getElementById("contact-page");

let NavbarDropdown = document.getElementById("navbarNavDropdown");

//firstly hide all pages except Home_Page

document.addEventListener("DOMContentLoaded", function () {
  Home_Page.classList.remove("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.add("hide");

  NavbarDropdown.classList.remove("show");

  //red text

  Home_Btn.classList.add("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.remove("red-letters");
});

// now let's handle the cases of these things being pressed

Home_Btn.addEventListener("click", function () {
  Home_Page.classList.remove("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.add("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.add("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.remove("red-letters");
});

About_Btn.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.remove("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.add("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.add("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.remove("red-letters");
});

Services_Btn.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.remove("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.add("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.add("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.remove("red-letters");
});

Projects_Btn.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.remove("hide");
  Contact_Page.classList.add("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.add("red-letters");
  Contact_Btn.classList.remove("red-letters");
});

Contact_Btn.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.remove("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.add("red-letters");
});

Contact_Btn_Bottom.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.remove("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.add("red-letters");
});

Contact_Btn_Services.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.remove("hide");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.add("red-letters");
});

Contact_Btn_Projects.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.add("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.remove("hide");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.remove("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.add("red-letters");
});

Services_btn_About.addEventListener("click", function () {
  Home_Page.classList.add("hide");
  About_Page.classList.add("hide");
  Services_Page.classList.remove("hide");
  Projects_Page.classList.add("hide");
  Contact_Page.classList.add("hide");

  NavbarDropdown.classList.remove("show");

  Home_Btn.classList.remove("red-letters");
  About_Btn.classList.remove("red-letters");
  Services_Btn.classList.add("red-letters");
  Projects_Btn.classList.remove("red-letters");
  Contact_Btn.classList.remove("red-letters");
});
