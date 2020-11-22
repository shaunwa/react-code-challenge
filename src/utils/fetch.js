
const Fetch = async (url = "", method, data = {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
  return await response.json();
};

const Get = async (url = "") => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
   
  });

  return response.json();
};

export { Fetch, Get };
