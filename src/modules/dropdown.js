"use strict";

export function selectDropdown() {
  const select = document.querySelectorAll("select");

  let customSelectTitle = [
    "Practice / Institution*",
    "Medical Profession*",
    "Type of Inquiry*",
  ];

  let customSelectContent = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5",
  ];

  select.forEach((item, i) => {
    let elementDiv = document.createElement("div");

    elementDiv.className = "form__group";
    elementDiv.innerHTML = `
    <div class="dropdown">
      <div class="dropdown__wrap">
        <button class="dropdown__button" type="button">
        <span class="dropdown__button-text">${customSelectTitle[i]}</span>
          <img
            class="dropdown__button-img"
            src="./img/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </button>
        <ul class="dropdown__list">
        ${customSelectContent
          .map(
            (text) => `
          <li class="dropdown__list-item" data-value="${text}">
             ${text}
          </li>
        `
          )
          .join("")}
        </ul>
        <input
          type="text"
          name="inquiry"
          value=""
          class="dropdown__input-hidden"
        />
      </div>
    </div>

  `;

    item.parentNode.replaceChild(elementDiv, item);
  });

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
    const dropDownWrap = dropDownWrapper.querySelector(".dropdown__wrap");
    const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropDownBtnText = dropDownWrapper.querySelector(
      ".dropdown__button-text"
    );
    const dropDownBtnImg = dropDownWrapper.querySelector(
      ".dropdown__button-img"
    );

    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      dropDownWrap.classList.toggle("dropdown__wrap--show");
    });

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();

        dropDownBtnText.innerText = this.innerText;
        dropDownBtnText.classList = "";
        dropDownInput.value = this.dataset.value;

        dropDownList.classList.remove("dropdown__list--visible");
        dropDownWrap.classList.remove("dropdown__wrap--show");
      });
    });

    document.addEventListener("click", function (e) {
      if (
        e.target !== dropDownBtn &&
        e.target !== dropDownBtnText &&
        e.target !== dropDownBtnImg
      ) {
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownWrap.classList.remove("dropdown__wrap--show");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownWrap.classList.remove("dropdown__wrap--show");
      }
    });
  });
}
