import { useApiClient, userApi } from "@/utils/api";
import { useAuth } from "@clerk/clerk-expo";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
// const API_BASE_URL = "https://twitter-app-clone-expo.vercel.app/api";
const API_BASE_URL = "http://192.168.54.109:5001/api";

// const createUser = async (getToken: () => Promise<string | null>) => {
// //   const token = await getToken();

// //   try {
// //     const response = await fetch(`${API_BASE_URL}/users/sync`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });

// //     const data = await response.json();
// //     console.log("createUser", data);
// //     return data;
// //   } catch (error) {
// //     throw new Error(`Error while creating user: ${error}`);
// //   }
// // };

export const useUserSync = () => {
  const { isSignedIn, getToken } = useAuth();

  const api = useApiClient();

  const { data: response, mutate } = useMutation({
    mutationFn: () => userApi.syncUser(api),
    // mutationFn: () => createUser(getToken),
    onSuccess: (response) => {
      console.log("User synced successfully: ", response.data);
    },
    onError: (error) => {
      console.error("Error while syncing user", error);
    },
  });

  useEffect(() => {
    if (isSignedIn && !response?.data) {
      mutate();
    }
  }, [isSignedIn]);
};
