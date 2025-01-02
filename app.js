let menuBtn = document.querySelector(".menu-btn");
let searchBtn = document.querySelector(".searchbtn");
let cartBtn = document.querySelector(".cartbtn");
let darkBtn = document.querySelector(".darkbtn");
let signImg = document.getElementById("signImg");

menuBtn.onclick = function () {
  document.getElementById("nav-items").classList.toggle("active");

  if (document.getElementById("nav-items").classList.contains("active")) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-xmark");
  } else {
    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");
  }
};

searchBtn.onclick = function () {
  document.getElementById("search-form").classList.toggle("active");

  if (document.getElementById("search-form").classList.contains("active")) {
    searchBtn.classList.remove("fa-magnifying-glass");
    searchBtn.classList.add("fa-xmark");
  } else {
    searchBtn.classList.remove("fa-xmark");
    searchBtn.classList.add("fa-magnifying-glass");
  }
};

cartBtn.onclick = function () {
  document.getElementById("cart").classList.toggle("active");

  if (document.getElementById("cart").classList.contains("active")) {
    cartBtn.classList.remove("fa-cart-shopping");
    cartBtn.classList.add("fa-xmark");
  } else {
    cartBtn.classList.remove("fa-xmark");
    cartBtn.classList.add("fa-cart-shopping");
  }
};

darkBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkBtn.classList.remove("fa-moon");
    darkBtn.classList.add("fa-sun");
  } else {
    darkBtn.classList.remove("fa-sun");
    darkBtn.classList.add("fa-moon");
  }
};

let menuTabs = document.querySelector(".menu-category");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-category-name") &&
    !e.target.classList.contains("active-menu")
  ) {
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active-menu").classList.remove("active-menu");
    e.target.classList.add("active-menu");
    let menuSection = document.querySelector(".menu");
    menuSection.querySelector(".menu-item.show").classList.remove("show");
    menuSection.querySelector(target).classList.add("show");
  } else {
    return;
  }
});

$(".popular-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".blog-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".event-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

function openPopup() {
  document.getElementById("advertisement-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("advertisement-popup").style.display = "none";
  localStorage.setItem("popupShown", "true"); // Store a flag in local storage
}

document.addEventListener("DOMContentLoaded", function () {
  const menuSection = document.getElementById("menu");
  let popupShown = localStorage.getItem("popupShown"); // Check local storage

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !popupShown) {
        openPopup();
        localStorage.setItem("popupShown", "true"); // Set the flag in local storage
        observer.unobserve(menuSection); // Stop observing after the popup is opened
      }
    });
  });

  if (!popupShown) {
    observer.observe(menuSection);
  }
});


