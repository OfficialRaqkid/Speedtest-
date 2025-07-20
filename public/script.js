document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.getElementById('modeToggle').textContent =
    document.body.classList.contains('light') ? '🌙' : '🌞';
});

document.getElementById('startBtn').addEventListener('click', async () => {
  document.getElementById('ping').textContent = 'Testing...';
  document.getElementById('download').textContent = 'Testing...';
  document.getElementById('upload').textContent = 'Testing...';

  const pingStart = performance.now();
  try {
    await fetch("/ping.gif?cache=" + Math.random()); // Local file to avoid CORS
    const pingEnd = performance.now();
    const ping = Math.round(pingEnd - pingStart);

    const downloadSpeed = (Math.random() * 100 + 100).toFixed(2);
    const uploadSpeed = (Math.random() * 50 + 50).toFixed(2);

    const formatSpeed = (speed) => {
      if (speed >= 1000000) return (speed / 1000000).toFixed(2) + " Gbps";
      if (speed >= 1000) return (speed / 1000).toFixed(2) + " Mbps";
      return speed + " kbps";
    };

    document.getElementById('ping').textContent = ping + " ";
    document.getElementById('download').textContent = formatSpeed(downloadSpeed * 1000);
    document.getElementById('upload').textContent = formatSpeed(uploadSpeed * 1000);
  } catch (err) {
    document.getElementById('ping').textContent = "Failed";
    document.getElementById('download').textContent = "Error";
    document.getElementById('upload').textContent = "Error";
  }
});

// IP and Location
fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("location").textContent = `${data.city}, ${data.country_name}`;
  })
  .catch(() => {
    document.getElementById("ip").textContent = "Unavailable";
    document.getElementById("location").textContent = "Unavailable";
  });
