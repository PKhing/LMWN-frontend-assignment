import {ITrip} from "common/types";
import {apiClient} from "config/axiosInstance";
import {useEffect, useState} from "react";

const useTrips = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  useEffect(() => {
    const getTrips = async () => {
      const res = await apiClient.get("/");
      setTrips(res.data);
    };
    getTrips();
  }, []);
  return trips;
};

export default useTrips;
