document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('share-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: document.querySelector('meta[name="description"]')?.content || '',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  });
});
