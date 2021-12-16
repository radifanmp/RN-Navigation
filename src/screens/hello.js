import * as React from "react";
import { Text, Box, Pressable } from "native-base";

export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "#2980b9",
          height: 40,
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color={{ color: "white" }}>Screen Increment and Decremend</Text>
      </Pressable>
    </Box>
  );
}
