document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.getElementById("share-button");
  const shareContent = document.querySelector(".share-content");

  shareButton.addEventListener("click", (event) => {
    event.stopPropagation();
    shareContent.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !shareButton.contains(event.target) &&
      !shareContent.contains(event.target)
    ) {
      shareContent.classList.remove("active");
    }
  });
});
