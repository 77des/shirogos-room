let topArrowTable = document.querySelector(".rating-table .top-arrow img");
let bottomArrowTable = document.querySelector(
  ".rating-table .bottom-arrow img"
);

topArrowTable.addEventListener("click", function () {
  if (!topArrowTable.classList.contains("disabled")) {
    var preloader = document.querySelector("#page-preloader");
    preloader.classList.remove("done");
    setTimeout(function () {
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }
    }, 1100);
  }
});

bottomArrowTable.addEventListener("click", function () {
    if (!bottomArrowTable.classList.contains("disabled")) {
      var preloader = document.querySelector("#page-preloader");
      preloader.classList.remove("done");
      setTimeout(function () {
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
        }
      }, 1100);
    }
});