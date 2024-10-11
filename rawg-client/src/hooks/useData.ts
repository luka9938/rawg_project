import { useState, useEffect } from "react";
import apiClient from "../services/api_client";
import { AxiosRequestConfig } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    () => {
      setIsFetching(true);

      apiClient
        .get<Response<T>>(endpoint, { ...requestConfig })
        .then((response) => setData(response.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setIsFetching(false));
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isFetching };
};

export default useData;
