import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholderText: string;
  placeholderTextColor?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  setValue,
  placeholderText,
  placeholderTextColor,
}) => {
  return (
    <View className="px-4 py-3 border-b border-gray-100">
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
        <Feather name="search" size={20} color={"#657786"} />
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholderText}
          placeholderTextColor={placeholderTextColor}
          className="flex-1 ml-3 text-base"
        />
      </View>
    </View>
  );
};

export default SearchBar;
