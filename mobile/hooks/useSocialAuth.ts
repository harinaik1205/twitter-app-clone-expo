import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [googleSigninLoading, setGoogleSigninLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const router = useRouter();
  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    if (strategy === "oauth_google") {
      setGoogleSigninLoading(true);
    } else {
      setIsLoading(true);
    }
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.log("Error while signin", error);
      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      Alert.alert(
        "Error: ",
        `Failed to sign in with ${provider}. Please try again.`
      );
    } finally {
      setGoogleSigninLoading(false);
      setIsLoading(false);
    }
  };

  return { isLoading, googleSigninLoading, handleSocialAuth };
};

export default useSocialAuth;
