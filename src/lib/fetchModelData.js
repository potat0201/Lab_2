function fetchModel(url) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3001" + url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi Server: " + response.status);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Lỗi fetch:", error);
        reject(error);
      });
  });
}

export default fetchModel;