document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Subscribe form: placeholder until connected to a real form backend
  // (Formspree, Buttondown, etc. — see README). Currently just prevents
  // a blank-page GET submit and shows an inline confirmation.
  var form = document.querySelector(".subscribe-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.parentElement.querySelector(".form-note");
      if (note) {
        note.textContent = "This form isn't wired up to a mailing list yet. See the README for how to connect one (Formspree or Buttondown both work free).";
      }
    });
  }
});
