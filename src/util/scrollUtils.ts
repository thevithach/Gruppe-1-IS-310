export const scrollToProfileSection = () => {
  const element = document.getElementById("profile-section");
  const offset = -70;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top || 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const scrollToHomeSection = () => {
  const element = document.getElementById("home");
  const offset = 0;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top || 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
