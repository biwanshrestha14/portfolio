// Select the followers
const follower1 = document.getElementById("follower1");
const follower2 = document.getElementById("follower2");

// Initialize mouse and followers positions
let mouseX = 0, mouseY = 0;
let follower1X = 0, follower1Y = 0;
let follower2X = 0, follower2Y = 0;

// Track the mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animation loop for smooth delayed movement
function animateFollowers() {
  // Lerp for the first follower
  follower1X += (mouseX - follower1X) * 0.1; // Fast response
  follower1Y += (mouseY - follower1Y) * 0.1;

  // Lerp for the second follower with a greater delay
  follower2X += (mouseX - follower2X) * 0.05; // Slower response
  follower2Y += (mouseY - follower2Y) * 0.05;

  // Update positions
  follower1.style.left = `${follower1X}px`;
  follower1.style.top = `${follower1Y}px`;

  follower2.style.left = `${follower2X}px`;
  follower2.style.top = `${follower2Y}px`;

  // Repeat the animation
  requestAnimationFrame(animateFollowers);
}

// Start the animation
animateFollowers();

// Apply mobile menu height calculations 
document.addEventListener('DOMContentLoaded', function () {
  // Always start with dark mode unless explicitly set to light mode
  if (localStorage.getItem('theme') === 'light') {
    // Light mode if specifically set
    toggleSvgIcons(false);
  } else {
    // Default to dark mode
    document.body.classList.add("darkmode");
    document.documentElement.classList.add('dark');
    toggleSvgIcons(true);
    // Set dark theme in localStorage if not already set
    if (!localStorage.getItem('theme')) {
      localStorage.setItem("theme", 'dark');
    }
  }

  // Navbar glassmorphism scroll effect
  const navbar = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// Function to toggle theme and update all SVG icons
function changegar() {
  const isDarkMode = document.body.classList.toggle("darkmode");
  document.documentElement.classList.toggle('dark');

  // Update localStorage based on current theme
  if (isDarkMode) {
    localStorage.setItem("theme", 'dark');
  } else {
    localStorage.setItem("theme", 'light'); // Store light mode explicitly
  }

  // Toggle all SVG icons
  toggleSvgIcons(isDarkMode);
}

// Helper function to toggle SVG icons in all theme toggles
function toggleSvgIcons(isDarkMode) {
  // Nav theme toggle
  const navToggle = document.querySelector('#themeswitch');
  const navLightIcon = navToggle.querySelector('svg:first-child');
  const navDarkIcon = navToggle.querySelector('svg:last-child');

  // Sidebar theme toggle
  const sidebarToggle = document.querySelector('.sidebar-theme-toggle');
  if (sidebarToggle) {
    const sidebarLightIcon = sidebarToggle.querySelector('svg:first-child');
    const sidebarDarkIcon = sidebarToggle.querySelector('svg:last-child');

    if (isDarkMode) {
      sidebarLightIcon.classList.add('hidden');
      sidebarDarkIcon.classList.remove('hidden');
    } else {
      sidebarLightIcon.classList.remove('hidden');
      sidebarDarkIcon.classList.add('hidden');
    }
  }

  if (isDarkMode) {
    navLightIcon.classList.add('hidden');
    navDarkIcon.classList.remove('hidden');
  } else {
    navLightIcon.classList.remove('hidden');
    navDarkIcon.classList.add('hidden');
  }
}

var typed = new Typed(".animate-text", {
  strings: ["Programmer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
})
function insta() {
  // Open Google in a new tab/window
  window.open("https://www.instagram.com/seekingwisdom.biwan/", "_blank");
}
function linkedin() {
  // Open Google in a new tab/window
  window.open("https://www.linkedin.com/in/biwan-shrestha-0571142a1/", "_blank");
}
function github() {
  // Open Google in a new tab/window
  window.open("https://github.com/biwanshrestha14", "_blank");
}
function facebook() {
  // Open Google in a new tab/window
  window.open("https://www.facebook.com/biwan.shrestha.50/", "_blank");
}

// Create backdrop element
const backdrop = document.createElement("div");
backdrop.id = "sidebar-backdrop";
backdrop.className = "fixed inset-0 bg-black bg-opacity-50 z-[99]";
backdrop.style.display = "none";
document.body.appendChild(backdrop);

// Function to close sidebar
function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("active");
  document.body.style.overflow = "auto"; // Restore scrolling
  backdrop.style.display = "none";
}

// Open sidebar
document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
  backdrop.style.display = "block";
});

// Close sidebar when close button is clicked
document.querySelector("#close").addEventListener("click", closeSidebar);

// Close sidebar when clicking backdrop
backdrop.addEventListener("click", closeSidebar);

// Close sidebar when clicking on a link (for mobile)
document.querySelectorAll(".sidebar-link").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

var tl = gsap.timeline();
tl.fromTo('.nav', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
tl.fromTo('#home', { scale: 0.25, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2 })
// gsap.fromTo('.profile',{y:100,opacity:0},{y:0,opacity:1,duration:1})
tl.from('.resume', {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.resume',
    start: 'top 80%',
    end: 'top 20%',
    // markers:true,
    scrub: 2
  }
}
)
tl.from('.edu', {
  delay: 0.4,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.edu',
    start: 'top 90%',
    end: 'top 50%',
    // markers:true,
    scrub: 2
  },
  stagger: 0.2
}
)
gsap.from('.box', {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: '.box',
    start: 'top 90%',
    end: 'top 90%',
    // markers:true,
    scrub: 2
  },
  stagger: 0.5,
})
gsap.from('.lol', {
  x: 500,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.lol',
    start: 'top 50%',
    end: 'top 70%',
    // markers:true,
    scrub: 2
  },
})


