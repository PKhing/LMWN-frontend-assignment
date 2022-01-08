import {ITrip} from "common/types";
import {apiClient} from "config/axiosInstance";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const useTrips = () => {
  const [searchParams] = useSearchParams();
  const [trips, setTrips] = useState<ITrip[]>([]);
  useEffect(() => {
    const getTrips = async () => {
      console.log("get", searchParams.get("keyword"));
      const res = await apiClient.get("/", {
        params: {keyword: searchParams.get("keyword")},
      });
      setTrips(res.data);
    };
    getTrips();
  }, [searchParams]);

  return trips;
};

export default useTrips;
