document.getElementById('videoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const link = document.getElementById('link').value;

  // Extract video ID from YouTube link
  const videoId = new URL(link).searchParams.get('v');

  // Fetch current videos from local storage
  const videos = JSON.parse(localStorage.getItem('podcastVideos')) || [];

  // Add new video to the list
  videos.push({ title, date, videoId });

  // Save updated video list to local storage
  localStorage.setItem('podcastVideos', JSON.stringify(videos));

  // Clear form and reload videos
  document.getElementById('videoForm').reset();
  displayVideos();
});

// Function to display videos from local storage
function displayVideos() {
  const videos = JSON.parse(localStorage.getItem('podcastVideos')) || [];
  const videoGallery = document.getElementById('videoGallery');
  videoGallery.innerHTML = '';

  videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card');
      videoCard.innerHTML = `
          <h3>${video.title}</h3>
          <p>${video.date}</p>
          <iframe width="100%" height="150" src="https://www.youtube.com/embed/${video.videoId}" frameborder="0" allowfullscreen></iframe>
      `;
      videoGallery.appendChild(videoCard);
  });
}

// Load videos on page load
window.addEventListener('DOMContentLoaded', displayVideos);
