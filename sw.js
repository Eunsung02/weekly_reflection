const CACHE_NAME = 'weekly-reflection-v1';
const ASSETS = ['./index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

// Periodic notification check
self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE_NOTIF') {
    const { day, hour, minute } = e.data;
    scheduleCheck(day, hour, minute);
  }
});

let notifInterval = null;
function scheduleCheck(day, hour, minute) {
  if (notifInterval) clearInterval(notifInterval);
  notifInterval = setInterval(() => {
    const now = new Date();
    if (now.getDay() === day && now.getHours() === hour && now.getMinutes() === minute) {
      self.registration.showNotification('📝 주간 회고 시간!', {
        body: '이번 주를 함께 돌아봐요',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80">🌿</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80">📝</text></svg>',
        vibrate: [200, 100, 200],
        tag: 'weekly-reflection',
        renotify: true
      });
    }
  }, 55000);
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('./index.html'));
});
