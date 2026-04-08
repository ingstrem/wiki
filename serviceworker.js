
const assets = ["/site.webmanifest"];

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceworker.js")
    .then((req) => {
      console.log("Success");
    })
    .catch((error) => {
      console.log("Failed");
    });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v2")
      .then((cache) => {
        return cache.addAll(assets);
      })
      .catch((error) => {
        console.error("Ошибка при кэшировании:", error);
      }),
  );
});
