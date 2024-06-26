import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(
    url,
    headers = {
      "X-RapidAPI-Key": "ad13a16c4bmsh74ca47b83322895p1bca45jsn858b780c174d",
      "X-RapidAPI-Host": "mega-millions.p.rapidapi.com",
    }
  ) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, { method: "GET", headers }) // Including method and headers
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject("No data returned");
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  function getGemini(
    url,
    headers = {
      "X-RapidAPI-Key": "ad13a16c4bmsh74ca47b83322895p1bca45jsn858b780c174d",
      "X-RapidAPI-Host": "mega-millions.p.rapidapi.com",
    }
  ) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, { method: "GET", headers }) // Including method and headers
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject("No data returned");
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject("No data returned");
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  return { getGemini, get, post, loading };
}
