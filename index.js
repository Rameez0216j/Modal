const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".close");
const share = document.querySelector(".btn-share");


console.log("js is active");
//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

overlay.addEventListener("click",closeModal);
cross.addEventListener("click",closeModal);
share.addEventListener("click",openModal);