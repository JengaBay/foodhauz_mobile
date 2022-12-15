/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, StatusBar, Text} from "react-native";
// import Button from 'components/Button'
import {colors} from "theme";
import {Box, Flex, Image, VStack} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../theme";
import HomeCard from "../../components/HomeCard";
import BottomNav from "../../components/BottomNav/index";

const HomeLinks = [
  {
    title: "Donation Tips",
    description: "Learn about in-need products and our donation guidelines",
    link: "#",
  },
  {
    title: "Your Food Bank",
    description:
      "Learn more about your local food bank and the services they offer",
    link: "#",
  },
  {
    title: "Community Donations",
    description: "Get the scoop on how others in your area are donating",
    link: "#",
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  title_desc: {
    color: "white",
  },
  meals_txt: {
    color: `${colors.primary_color}`,
    fontWeight: "bold",
  },
  history: {
    fontWeight: "bold",
    color: `${colors.primary_color}`,
  },
  meals: {
    width: "80%",
  },
});

const RecepientDash = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <VStack h="100%" w="100%" bg="white">
      <VStack w="100%">
        <VStack
          bg={colors.background_color}
          w="100%"
          h="260"
          borderBottomLeftRadius="20px"
          borderBottomRightRadius="20px"
          alignSelf="baseline"
        >
          <Flex
            flexDir="row"
            bg={colors.primary_color}
            p="30px"
            h="130"
            alignItems="center"
            justifyContent="space-between"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
          >
            <Box>
              <Text style={styles.title}>Hi, Catherine</Text>
              <Text style={styles.title_desc}>
                What would you like to donate today?
              </Text>
            </Box>
            <Image source={images.profile_img} alt="donation image" />
          </Flex>
        </VStack>
      </VStack>
      <VStack h="600">
        <Text>This is the recepient's dashboard</Text>
      </VStack>
      <Text>hello</Text>
      {/* <BottomNav /> */}
    </VStack>
  </SafeAreaView>
);

export default RecepientDash;
