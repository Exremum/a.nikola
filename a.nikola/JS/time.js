function updateTime() {
    const now = new Date();
    const mskOffset = 3; 
    const mskTime = new Date(now.getTime() + (mskOffset * 60 * 60 * 1000));
    const timeString = `${(mskTime.getHours() + 24 - mskOffset) % 24}:${mskTime.getMinutes().toString().padStart(2, '0')}:${mskTime.getSeconds().toString().padStart(2, '0')}`;
    const dateString = mskTime.toLocaleDateString();
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }
  
  window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
  }