function initMap() {
  const kitchener = { lat: 43.444853620689514, lng: -80.51576414533764 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: kitchener,
    disableDefaultUI: true,
  });

  let styles = [
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi.medical",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi.school",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi.sports_complex",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "landscape.man_made",
      stylers: [
        {
          color: "#FCFAF6"
        },
      ]
    },
    {
      featureType: "poi.medical",
      stylers: [
        {
          color: "#FCFAF6"
        },
      ]
    },
    {
      featureType: "poi.park",
      stylers: [
        {
          color: "#E0F1E5"
        },
      ]
    },
  ]
  map.setOptions({styles: styles});

  const marker = new google.maps.Marker({
    position: kitchener,
    map: map,
    icon: './img/icons/marker.svg',
  });

  const info = new google.maps.InfoWindow({
    content: `
      <h3 class="map__title">Voodoo</h3>
      <p class="map__text">137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 <br> Ukraine</p>

      <a class="map__link" href="tel:1-800-480-9597">
        <img src="./img/icons/phone.svg" alt="">
        1-800-480-9597
      </a>
      <a class="map__link" href="mailto:info@voodoo.com">
        <img src="./img/icons/mail.svg" alt="">
        info@voodoo.com
      </a>
      `,
    maxWidth: 244,
  });

  marker.addListener("click", function() {
    info.open(map, marker)
  });

  info.open(map, marker)

}

window.initMap = initMap;


const form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
  e.preventDefault()
})


if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});
