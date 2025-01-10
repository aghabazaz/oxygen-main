export const scrollTop = () => {
  document
    .querySelector("body")
    ?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const scrollBottom = () => {
  document.querySelector("body")?.scrollTo({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};
