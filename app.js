gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-link a");
const active = document.querySelector(".active");
const cards = document.querySelectorAll(".card");

links.forEach((link) => {
  console.log();
  if (link.textContent === links[0].textContent) 
  gsap.to(link, { color: "blueviolet" });  
  link.addEventListener("click", () => {
    gsap.to(links, { color: "#252525" });
    const state = Flip.getState(active);
    link.appendChild(active);
    gsap.to(active.parentElement, { color: "blueviolet" });
    Flip.from(state, {
      duration: 0.8,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});

cards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    const state = Flip.getState(cards);
    const cardActive = card.classList.contains("card-active");
    cards.forEach((othercards, otherIndex) => {
      othercards.classList.remove("card-active");
      othercards.classList.remove("card-inactive");
      if (!cardActive && index !== otherIndex) {
        othercards.classList.add("card-inactive");
      }
    });
    if (!cardActive) card.classList.add("card-active");
    Flip.from(state, {
      duration: 1.3,
      absolute: true,
      ease: "expo",
      fade: true,
    });
  });
});
