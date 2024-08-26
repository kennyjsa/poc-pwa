const map = L.map('map').fitWorld();

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



document.getElementById('geoButton').addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude, accuracy } = position.coords;
      var latlng = L.latLng(latitude, longitude);
      const radius = accuracy / 2;

      const textContent = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy}`;


      const locationMarker = L.marker(latlng).addTo(map)
  			.bindPopup(textContent).openPopup();
		  const locationCircle = L.circle(latlng, radius).addTo(map);

      document.getElementById('geoLocation').textContent = textContent;
    }, error => {
      console.error('Error getting geolocation:', error);
    }, { enableHighAccuracy: true });
  } else {
    alert('Geolocation not supported in this browser.');
  }
});
