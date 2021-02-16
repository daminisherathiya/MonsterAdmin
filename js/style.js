var side_lis = document.querySelectorAll(".side-li");
side_lis.forEach(element => {
    element.addEventListener("click", open_list);
});
function open_list(event) {
    var is_open = true;
    if(event.currentTarget.nextElementSibling.classList.contains("d-none")) {
        is_open = false;
    }

    side_lis.forEach(element => {
        if(element.nextElementSibling) {
            element.nextElementSibling.classList.add("d-none");
        }
        element.classList.remove("active");
        if(element.querySelector("a")) {
            element.querySelector("a").classList.remove("active");
        }
        var arrow_imgs = element.querySelectorAll("div > img");

        if(arrow_imgs.length) {
            arrow_imgs[0].classList.remove("d-none");
            arrow_imgs[1].classList.add("d-none");
        }
    });

    if(!is_open) {
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


// var collapse_btn = document.querySelector(".collapse-btn");
// collapse_btn.addEventListener("click", collapse_sidebar);
// function collapse_sidebar() {
//     var side_bar = document.getElementsByClassName("side-bar");
//     side_bar[0].classList.toggle("small-side-bar");
//     var tag_none = document.querySelectorAll("ul span,.side-li div img");
//     tag_none.forEach(element => {
//         element.style.display = element.style.display === 'none' ? '' : 'none';
//     });
//     var nav_small_cap = document.querySelectorAll(".nav-small-cap");
//     nav_small_cap.forEach(element => {
//         element.style.display = element.style.display === 'none' ? '' : 'none';
//     });
// }

var collapse_btn = document.querySelector(".collapse-btn");
collapse_btn.addEventListener("click", collapse_sidebar);
function collapse_sidebar() {
    var side_bar = document.querySelector(".side-bar");
    if(side_bar.classList.contains("big-sidebar")) {
        side_bar.classList.remove("big-sidebar");
        side_bar.classList.add("small-sidebar")
    }
    else {
        side_bar.classList.add("big-sidebar");
        side_bar.classList.remove("small-sidebar")
    }
    // var tag_none = document.querySelectorAll("ul span,.side-li div img");
    //  tag_none.forEach(element => {
    //      element.style.display = element.style.display === 'none' ? '' : 'none';
    //  });
    //  var nav_small_cap = document.querySelectorAll(".nav-small-cap");
    //  nav_small_cap.forEach(element => {
    //      element.style.display = element.style.display === 'none' ? '' : 'none';
    //  });
}
