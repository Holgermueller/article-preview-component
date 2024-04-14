"use strict";

const openModal = () => {
  document.getElementsByClassName("share-section")[0].style.display = "flex";
  console.log("click");
};

const closeModal = () => {
  document.getElementsByClassName("share-section")[0].style.display = "none";
  console.log("click");
};
