document.getElementById('fileInput').addEventListener('change', event => {
  const file = event.target.files[0];
  if (file) {
    console.log('Selected file:', file.name);
    const reader = new FileReader();
    reader.onload = e => {
      const fileDisplay = document.getElementById('fileDisplay');
      fileDisplay.innerHTML = '';
      const mediaElement = file.type.startsWith('video') ? document.createElement('video') : document.createElement('img');
      mediaElement.src = e.target.result;
      if (file.type.startsWith('video')) {
        mediaElement.controls = true;
      }
      fileDisplay.appendChild(mediaElement);
    };
    reader.readAsDataURL(file);
  }
});
