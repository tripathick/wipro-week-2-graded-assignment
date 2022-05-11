export const fetch_data = () => {
  return new Promise((resolve, reject) => {
    fetch("../data/db.json")
      .then((response) => response.json())
      .then((data) => resolve(data.data))
      .catch((err) => reject(err));
  });
};
