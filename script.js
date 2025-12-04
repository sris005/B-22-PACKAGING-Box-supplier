/* ================================================
   1) SMOOTH SCROLL ON NAVIGATION CLICK
================================================= */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


/* ================================================
   2) SCROLL REVEAL ANIMATION
================================================= */
const revealElements = document.querySelectorAll(".section, .hero, .fleet-card, .service-card");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 150) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



/* ================================================
   3) ACTIVE NAV LINK HIGHLIGHT (professional)
================================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});



/* ================================================
   4) COST ESTIMATOR (Vehicle KM Cost Logic)
================================================= */
function calculateCost() {
  const km = Number(document.getElementById("kmInput")?.value);
  const vehicle = document.getElementById("vehicleSelect")?.value;
  const output = document.getElementById("costOutput");

  if (!km || km <= 0) {
    output.innerHTML = "<b>Enter a valid distance!</b>";
    return;
  }

  let perKm = 0;
  if (vehicle === "vikram") perKm = 15;
  if (vehicle === "super") perKm = 20;
  if (vehicle === "dost") perKm = 24;

  const total = km * perKm;

  output.innerHTML = `
    Estimated Transport Cost: <b>₹${total.toLocaleString("en-IN")}</b>
    <br><small>Final price may vary based on loading & timing.</small>
  `;
}



// Button Click Event (if element exists)
const calcBtn = document.getElementById("calcButton");
if (calcBtn) {
  calcBtn.addEventListener("click", calculateCost);
}



/* ================================================
   5) CONTACT FORM POPUP MESSAGE
================================================= */
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Your message has been submitted successfully!\nWe will contact you shortly.");

    contactForm.reset();
  });
}



/* ================================================
   6) BACK TO TOP BUTTON (auto show)
================================================= */
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
