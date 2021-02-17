var side_lis = document.querySelectorAll(".side-li");
side_lis.forEach(element => {
  element.addEventListener("click", open_list);
});
function open_list(event) {
  var is_open = true;
  if (event.currentTarget.nextElementSibling.classList.contains("d-none")) {
    is_open = false;
  }

  side_lis.forEach(element => {
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.add("d-none");
    }
    element.classList.remove("active");
    if (element.querySelector("a")) {
      element.querySelector("a").classList.remove("active");
    }
    var arrow_imgs = element.querySelectorAll("div > img");

    if (arrow_imgs.length) {
      arrow_imgs[0].classList.remove("d-none");
      arrow_imgs[1].classList.add("d-none");
    }
  });

  if (!is_open) {
    event.currentTarget.classList.add("active");
    event.currentTarget.querySelector("a").classList.add("active");
    event.currentTarget.nextElementSibling.classList.remove("d-none");
    var arrow_imgs = event.currentTarget.querySelectorAll("div > img");
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
  var navbar = document.querySelector(".navbar");
  if (side_bar.classList.contains("big-sidebar")) {
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

