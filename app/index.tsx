import {
  Box,
  Center,
  VStack,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { useNavigation } from "expo-router";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        // barStyle={
        //   dataLogin.darkMode === "dark" ? "light-content" : "dark-content"
        // }
      />
      <View
        style={{ flex: 1, justifyContent: "space-between", paddingTop: 50 }}
      >
        {/* <Center h="20%">
          <VStack>
            <Center pt={5} mt={5}>
              <Center mt={9} bg="#0000">
                {/* <PLI_Ilustration w={deviceWidth / 1} h={deviceHeight / 3} /> */}
        {/* <Image
                    source={require("@assets/images/login_ilustrasi.png")}
                    style={{
                      width: 250,
                      height: 250,
                      resizeMode: "contain",
                      marginTop: "10%",
                      marginLeft: "-2%",
                    }}
                  /> 
              </Center>
            </Center>
          </VStack>
        </Center> */}

        <Center>
          <Box h="100%" w="90%" px={15} py={25} borderRadius={10} mt={300}>
            <VStack justifyContent="space-between">
              {/* <Center>
                  {error.username && <Text>username is required.</Text>}
                </Center> */}
              {/* <Text>{urlss && urlss}</Text> */}

              <Text ml={8} fontSize={18} mb={8}>
                Email
              </Text>

              <Input>
                <InputField placeholder="email" />
              </Input>

              <Text ml={8} fontSize={18} mb={8} mt={10}>
                Kata Sandi
              </Text>

              <Input>
                <InputField type="password" placeholder="password" />
              </Input>

              {/* <Text>{JSON.stringify(token)}</Text> */}

              <TouchableOpacity
                onPress={() => navigation.navigate("tab" as never)}
              >
                <Box
                  mt={30}
                  borderRadius={16}
                  w="100%"
                  h={55}
                  bgColor="green"
                  style={styles.shadowButton}
                >
                  <Center pt={15}>
                    <Text color="#EBF1F2" fontSize={20} fontWeight="600">
                      Masuk{" "}
                      {/* {isLoading && (
                          <Spinner color="white" size={25} mt={25} ml={10} />
                          )} */}
                    </Text>
                  </Center>
                </Box>
              </TouchableOpacity>
            </VStack>
          </Box>
        </Center>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: '#ECF0F1',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    paddingTop: 9,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  input: {
    fontSize: 16,
    fontWeight: "500",
    color: "#288471",
    backgroundColor: "#EBF1F2",
    marginBottom: 15,
    borderRadius: 20,
    padding: 8,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 25,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  shadowButton: {
    shadowColor: "#00000",
    shadowOffset: { width: 5, height: 14 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginVertical: 10,
    elevation: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
});
export default Login;
