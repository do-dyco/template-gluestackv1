import React from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  Text,
  Button,
  VStack,
  Center,
  Divider,
  ButtonText,
  ScrollView,
  AvatarFallbackText,
  AvatarImage,
  StatusBar,
  Box,
  HStack,
} from "@gluestack-ui/themed";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation<any>();
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <StatusBar />
        <Center mt={20}>
          <Avatar size="xl">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZfk_mBRRAnMVpDjIrMbiU5DUxjWeZ5nqRQ&s",
              }}
              alt="myPic"
            />
          </Avatar>
          <Text>Username</Text>
        </Center>
        <Divider mt={10} />
        <VStack space="xl">
          <VStack style={styles.vStackInner} space="xs">
            <ThemedText style={styles.themedText}>SETTINGS</ThemedText>

            <Box mx={10}>
              <Divider />
              <HStack justifyContent="space-between" mt={20}>
                <HStack>
                  <Text>
                    <MaterialIcons name="person" size={25} />
                  </Text>
                  <Box pl={8}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("" as never, {
                          screen: "",
                          params: { id: "" },
                        })
                      }
                    >
                      <Text fontWeight="$bold">Change Profile</Text>
                    </TouchableOpacity>
                  </Box>
                </HStack>
                <Box pt={6}>
                  <Text>
                    <MaterialIcons name="keyboard-arrow-right" size={25} />
                  </Text>
                </Box>
              </HStack>

              <HStack justifyContent="space-between" mt={20}>
                <HStack>
                  <Text>
                    <MaterialIcons name="palette" size={25} />
                  </Text>
                  <Box pl={8}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("" as never, {
                          screen: "",
                          params: { id: "" },
                        })
                      }
                    >
                      <Text fontWeight="$bold">Change Theme</Text>
                    </TouchableOpacity>
                  </Box>
                </HStack>
                <Box pt={6}>
                  <Text>
                    <MaterialIcons name="keyboard-arrow-right" size={25} />
                  </Text>
                </Box>
              </HStack>

              <HStack justifyContent="space-between" mt={20}>
                <HStack>
                  <Text>
                    <MaterialIcons name="language" size={25} />
                  </Text>
                  <Box pl={8}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("" as never, {
                          screen: "",
                          params: { id: "" },
                        })
                      }
                    >
                      <Text fontWeight="$bold">Change Language</Text>
                    </TouchableOpacity>
                  </Box>
                </HStack>
                <Box pt={6}>
                  <Text>
                    <MaterialIcons name="keyboard-arrow-right" size={25} />
                  </Text>
                </Box>
              </HStack>
            </Box>
          </VStack>
          <Divider />
        </VStack>
        <HStack justifyContent="space-between" mt={20} mx={10}>
          <HStack>
            <Text>
              <MaterialIcons name="logout" size={25} color={"red"} />
            </Text>
            <Box pl={8}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("login" as never, {
                    screen: "login",
                  })
                }
              >
                <Text fontWeight="$bold" color="red">
                  Logout
                </Text>
              </TouchableOpacity>
            </Box>
          </HStack>
        </HStack>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  vStack: {
    flex: 1,
    width: 280,
    paddingVertical: 16,
    paddingRight: 16,
    paddingLeft: 32,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#D1D5DB", // Replace with your `border-border-300` color
  },
  vStackInner: {
    width: "100%",
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 16,
  },
  themedText: {
    color: "#4B5563", // Replace with your `text-typography-600` color
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: "#4B5563", // Replace with your `text-typography-600` color
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
