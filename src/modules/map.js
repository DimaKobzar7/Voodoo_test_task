export function initMap() {
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
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.medical",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.school",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.sports_complex",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape.man_made",
      stylers: [
        {
          color: "#FCFAF6",
        },
      ],
    },
    {
      featureType: "poi.medical",
      stylers: [
        {
          color: "#FCFAF6",
        },
      ],
    },
    {
      featureType: "poi.park",
      stylers: [
        {
          color: "#E0F1E5",
        },
      ],
    },
  ];

  map.setOptions({ styles: styles });

  const marker = new google.maps.Marker({
    position: kitchener,
    map: map,
    icon: "./img/icons/marker.svg",
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
    minWidth: 244,
  });

  info.open(map, marker);
}

window.initMap = initMap;
