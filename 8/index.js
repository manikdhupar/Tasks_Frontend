window.addEventListener("load", function() {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function() {
      if (this.files && this.files[0]) {
        var img = document.querySelector(".card__img");
        img.style.display = "block";
        document.querySelector(".card__label").style.display = "none";
        img.src = URL.createObjectURL(this.files[0]);
      }
    });
});
