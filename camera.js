function openCamera(facingMode) {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode } })
      .then(stream => {
        const video = document.getElementById('videoElement');
        video.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  } else {
    alert('Camera not supported in this browser.');
  }
}

document.getElementById('cameraFrontButton').addEventListener('click', () => openCamera('user'));
document.getElementById('cameraBackButton').addEventListener('click', () => openCamera('environment'));
