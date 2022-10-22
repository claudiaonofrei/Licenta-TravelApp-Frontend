export const authorizedFetch = async (url, options = {}) => {
  const authToken = localStorage.getItem("authToken");
  const headers = {
    ...options.headers,
    authorization: authToken,
  };
  return fetch(url, {
    ...options,
    headers,
  });
};
