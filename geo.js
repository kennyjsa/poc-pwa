document.getElementById('geoButton').addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      document.getElementById('geoLocation').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 15
      });

      new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
      });

    }, error => {
      console.error('Error getting geolocation:', error);
    });
  } else {
    alert('Geolocation not supported in this browser.');
  }
});
