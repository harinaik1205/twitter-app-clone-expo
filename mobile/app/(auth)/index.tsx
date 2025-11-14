import useSocialAuth from "@/hooks/useSocialAuth";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { googleSigninLoading, isLoading, handleSocialAuth } = useSocialAuth();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 p-8">
        {/* image */}
        <View className="flex-1 justify-center">
          <View className="items-center">
            <Image
              source={require("../../assets/images/auth2.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* signin buttons */}
        <View className="flex-col gap-2">
          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_google")}
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
            disabled={googleSigninLoading}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            {googleSigninLoading ? (
              <ActivityIndicator size={"large"} color={"#4285f4"} />
            ) : (
              <View className="flex-row justify-center items-center">
                <Image
                  source={require("../../assets/images/google.png")}
                  className="size-10 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">
                  Continue with Google
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* apple signin */}
          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_apple")}
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            {isLoading ? (
              <ActivityIndicator size={"large"} color={"#4285f4"} />
            ) : (
              <View className="flex-row justify-center items-center">
                <Image
                  source={require("../../assets/images/apple.png")}
                  className="size-10 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">
                  Continue with Apple
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
          <Text className="">By signing up, you agree to our </Text>
          <Text className="text-blue-500">Terms</Text>
          <Text className="text-gray-500">, </Text>
          <Text className="text-blue-500">Privacy Policy</Text>
          <Text className="text-gray-500">, and </Text>
          <Text className="text-blue-500">Cookie Use</Text>
          <Text className="text-gray-500">.</Text>
        </Text>
      </View>
    </View>
  );
}
