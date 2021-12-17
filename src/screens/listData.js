import React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";

export default function ListData({ navigation }) {
  const socilaMedia = ["Netflix", "Disney", "Instagram"];

  //   Make Function Send Data
  const handlePress = (value) => {
    navigation.navigate("Detail Data", { value });
  };

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <FlatList
        data={socilaMedia}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <Text
              fontFamily="body"
              fontWeight={400}
              fontStyle="italic"
              fontSize={30}
              margin={5}
            >
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </Box>
  );
}
