const endDate = new Date('September 15, 2025 00:00:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>🎉 Time's up! 🎉</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
};

setInterval(updateCountdown, 1000);
updateCountdown();
