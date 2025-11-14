import { View, Text } from "react-native";
import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Profile = () => {
  const { isLoading, error, currentUser } = useCurrentUser();
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text className="text-blue-700"> Loading...</Text>
      </View>
    );
  }

  if (error?.message) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-300">{error.message}</Text>
      </View>
    );
  }

  console.log(currentUser);

  return (
    <View>
      <Text>{JSON.stringify(currentUser)}</Text>
    </View>
  );
};

export default Profile;
