/**
 * Farmers Report — Navigation & Application Logic
 * Handles splash screen session restore and seamless dashboard transition
 */
document.addEventListener('DOMContentLoaded', () => {
  const welcomeBtn = document.getElementById('welcome-btn') || document.getElementById('welcomeBtn') || document.getElementById('welcomeBackBtn');

  if (welcomeBtn) {
    welcomeBtn.addEventListener('click', (e) => {
      // Visual Feedback Micro-interaction
      const syncIcon = welcomeBtn.querySelector('.sync-icon');
      if (syncIcon) {
        syncIcon.style.animation = 'spin 0.8s linear infinite';
      }
      
      welcomeBtn.style.opacity = '0.9';
      welcomeBtn.style.transform = 'scale(0.98)';

      // Navigate to Dashboard after smooth transition
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 300);
    });
  }
});
