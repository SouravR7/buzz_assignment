const getDataList = () => {
  return fetch(
    `https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=EUR`,
    { method: "GET" }
  )
    .then((response) => response)
    .catch((e) => e.response);
};

const updateDataList = (page) => {
  return fetch(
    `https://api.coinstats.app/public/v1/coins?skip=${page}&limit=20&currency=EUR`,
    { method: "GET" }
  )
    .then((response) => response)
    .catch((e) => e.response);
};

export { getDataList, updateDataList };
