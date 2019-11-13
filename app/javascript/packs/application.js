/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }
};

export { initMapbox };

import mapboxgl from 'mapbox-gl';

const apiToken = "pk.eyJ1IjoiY3doaWdodCIsImEiOiJjazJnMzQ1ZjMwbDM0M2hzNWdhaTF0N25mIn0.UGd4TnsGIiGUUQBNfDqAzw";

mapboxgl.accessToken = `${apiToken}`;

const createMap = (coords) => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: coords,
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat(coords)
    .addTo(map);
};

const mapBox = document.querySelector("#map");
const form = document.querySelector("#form");
// const query = document.querySelector("#address").value;

const submit = (e) => {
  e.preventDefault();
  const query = document.querySelector("#address").value;
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${apiToken}`)
    .then(response => response.json())
    .then((data) => {
      const coords = data.features[0].geometry.coordinates;
      createMap(coords);
    });
};

form.addEventListener("submit", submit);
