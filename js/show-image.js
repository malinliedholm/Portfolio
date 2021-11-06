function onClickImage(element) {
  document.getElementById("imgToShow").src = element.src;
  document.getElementById("modalImageDisplay").style.display = "block";
}