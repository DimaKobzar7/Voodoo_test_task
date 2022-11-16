export function form() {
  const form = document.querySelector("#form");
  const dropDownBtnText = document.querySelectorAll(".dropdown__button-text");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let customSelectTitle = [
      "Practice / Institution*",
      "Medical Profession*",
      "Type of Inquiry*",
    ];

    dropDownBtnText.forEach((title, i) => {
      dropDownBtnText[i].innerText = customSelectTitle[i];
      title.classList = "dropdown__button-text";
    });

    form.reset();
  });
}
