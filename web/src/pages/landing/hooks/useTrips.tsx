import {useError} from "common/components/Error/context/ErrorContext";
import {ITrip} from "common/types";
import {apiClient} from "config/axiosInstance";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const useTrips = () => {
  const [searchParams] = useSearchParams();
  const [trips, setTrips] = useState<ITrip[]>([]);
  const {openError} = useError();
  useEffect(() => {
    const getTrips = async () => {
      console.log("get", searchParams.get("keyword"));
      try {
        const res = await apiClient.get("/", {
          params: {keyword: searchParams.get("keyword")},
        });
        setTrips(res.data);
      } catch (err) {
        const error = err as any;
        if (!error.response) {
          openError("Cannot connect to API");
        } else {
          openError(
            `${error.response.status} : ${
              error.response.data.message ||
              error.response.statusText ||
              "Error"
            }`
          );
        }
        console.log(error.response);
      }
    };
    getTrips();
  }, [openError, searchParams]);

  return trips;
};

export default useTrips;
