import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Index = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    console.log("isSignedIn", isSignedIn);
    return <Redirect href={"/(tabs)"} />;
  } else {
    return <Redirect href={"/(auth)"} />;
  }
};

export default Index;
