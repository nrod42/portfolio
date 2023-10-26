particlesJS("particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: "true",
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "push",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Check if the Bootstrap navigation is open or closed
let isNavOpen = false;

// Add a click event listener to the hamburger button
document.querySelector(".navbar-toggler").addEventListener("click", function () {
    if (isNavOpen) {
        // If the navigation is open, close it
        document.querySelector(".navbar-toggler").click();
        isNavOpen = false;
    } else {
        // If the navigation is closed, open it
        document.querySelector(".navbar-toggler").click();
        isNavOpen = true;
    }
});

// Add a click event listener to the document body to close the navigation when clicking away
document.body.addEventListener("click", function (event) {
    if (isNavOpen) {
        if (!event.target.closest(".navbar")) {
            // If the navigation is open and the click is outside the navbar, close it
            document.querySelector(".navbar-toggler").click();
            isNavOpen = false;
        }
    }
});

// Add a click event listener to close the navigation when clicking a link in it
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        document.querySelector(".navbar-toggler").click();
        isNavOpen = false;
    });
});

const projectContainers = document.querySelectorAll(".project");

projectContainers.forEach((container) => {
  const seeMoreLink = container.querySelector(".see-more-link");
  
  container.addEventListener('click', (e) => {
    // Check if the click target is the "See More" link or anywhere within the project container
    if (e.target === seeMoreLink || container.contains(e.target)) {
      e.preventDefault();
      const additionalContent = container.querySelectorAll(".additional-content");
      additionalContent.forEach((additional) => {
        additional.classList.toggle("expanded")
      })
      
    }
  });
});
