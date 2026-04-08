const db = await new Promise((resolve, reject) => {
  const request = indexedDB.open("storage", 1);

  request.onupgradeneeded = (event) => {
    const db = request.result;
    if (!db.objectStoreNames.contains("user")) {
      db.createObjectStore("user", { keyPath: "id", autoIncrement: true });
    }
  };

  request.onsuccess = (event) => {
    resolve(request.result);
  };

  request.onerror = (event) => {
    reject(request.error || new Error("IndexedDB open failed"));
  };

  // Дополнительно: обработка блокировок
  request.onblocked = (event) => {
    reject(new Error("IndexedDB request blocked"));
  };
});
