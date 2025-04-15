
import { useState, useEffect } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(api);
    const result = await response.json();
    setData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [api]);

  return { data, isLoading };
};
