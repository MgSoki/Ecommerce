import React, { useEffect, useState } from "react";

const useFetch = (setFetchedData, fetchFn, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFn(arg);

        setData((pre) => {
          return { loading: false, error: null };
        });
        setFetchedData(data);
      } catch (error) {
        setData((pre) => {
          return { loading: false, error: error.meesage };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
