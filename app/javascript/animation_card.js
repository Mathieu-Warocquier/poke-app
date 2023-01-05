const cards = document.querySelectorAll("#card")
const THRESHOLD = 20;


// cards.forEach((card) => {

  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);


    card.style.transform =
      `perspective(${1000}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  }

  const resetStyles = (e) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }

  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);


// });
