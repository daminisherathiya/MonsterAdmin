var side_lis = document.querySelectorAll(".side-li");
var sidebar_link = document.querySelectorAll(".sidebar-link");
sidebar_link.forEach(element => {
  element.addEventListener("click", open_list);
});
function open_list(event) {
  var is_open = true;
  // console.log(event.currentTarget.parentElement.querySelector("ul"))
  if (event.currentTarget.parentElement.querySelector("ul").classList.contains("d-none")) {
    is_open = false;
  }

  sidebar_link.forEach(element => {
    // console.log(element.parentElement.querySelector("ul"));
    if (element.parentElement.querySelector("ul")) {
      element.parentElement.querySelector("ul").classList.add("d-none");
    }
    console.log(element);
    element.classList.remove("active");
    // console.log(element.querySelector("a"));
    if (element.querySelector("a")) {
      element.querySelector("a").classList.remove("active");
    }
    var arrow_imgs = element.querySelectorAll("a div:nth-child(2) > img");
    // console.log(arrow_imgs);
    if (arrow_imgs.length) {
      arrow_imgs[0].classList.remove("d-none");
      arrow_imgs[1].classList.add("d-none");
    }
  });

  if (!is_open) {
    // console.log(event.currentTarget);
    event.currentTarget.classList.add("active");
    // console.log(event.currentTarget);
    // event.currentTarget.parentElement.classList.add("active");
    console.log(event.currentTarget.parentElement.querySelector("ul"))
    event.currentTarget.parentElement.querySelector("ul").classList.remove("d-none");
    var arrow_imgs = event.currentTarget.querySelectorAll("a div:nth-child(2) > img");
    arrow_imgs[0].classList.add("d-none");
    arrow_imgs[1].classList.remove("d-none");
  }
}

var sidebar_sublinks = document.querySelectorAll(".sidebar-sublink");
sidebar_sublinks.forEach(element => {
  element.addEventListener("click", sidebar_sublink_active);
});
function sidebar_sublink_active(event) {
  sidebar_sublinks.forEach(element => {
    element.classList.remove("active")
  });
  event.currentTarget.classList.toggle("active");
}


var collapse_btn = document.querySelector(".collapse-btn");
collapse_btn.addEventListener("click", collapse_sidebar);
function collapse_sidebar() {
  var side_bar = document.querySelector(".side-bar");
  var ul_span = document.querySelector("ul span");
  var navbar = document.querySelector(".navbar");
  if (window.getComputedStyle(ul_span).display !== "none") {
    side_bar.classList.remove("big-sidebar");
    side_bar.classList.add("small-sidebar");
    navbar.classList.remove("big-nav");
    navbar.classList.add("small-nav");
  }
  else {
    side_bar.classList.add("big-sidebar");
    side_bar.classList.remove("small-sidebar");
    navbar.classList.add("big-nav");
    navbar.classList.remove("small-nav");
  }
}
var toggle_sidebar = document.querySelector(".toggle-sidebar");
toggle_sidebar.addEventListener("click", minimize_sidebar);
function minimize_sidebar() {
  var side_bar = document.querySelector(".side-bar");
  side_bar.classList.toggle("minimize-sidebar");
}

