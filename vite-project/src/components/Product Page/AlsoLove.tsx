import React from "react";
import { Container, Heading, VStack } from "@chakra-ui/react";
import AlsoLoveItem from "./AlsoLoveItem";

const AlsoLove = () => {
  return (
    <Container variant={"fluid"} sx={styles.containerBg} mt={"70px"}>
      <Container variant={"responsive"} pt={"70px"}>
        <Heading
          textAlign={"center"}
          fontSize={"3xl"}
          color={"brandDark"}
          mb={"40px"}
        >
          People Also Love
        </Heading>
        <VStack spacing={"80px"}>
          <AlsoLoveItem
            title={"Beef Bone Broth"}
            desc={
              "Smooth and savory sips, made from grass-fed beef with the slightest hint of herbs. Perfect for staying satiated between meals."
            }
            src={
              "https://files.growaov.com/kettleandfire.myshopify.com/images/beef_900x900.jpg"
            }
          />
          <AlsoLoveItem
            title={"Turmeric Ginger Bone Broth"}
            desc={
              "A warm & flavorful sip with a light & zesty zip! This broth is an irresistible one-two punch for immune function & digestive support"
            }
            src={
              "https://files.growaov.com/kettleandfire.myshopify.com/images/turmeric_900x900.jpg"
            }
          />
          <AlsoLoveItem
            title={"Regenerative Chicken Bone Broth"}
            desc={
              "Rich, slow-simmered chicken bone broth made with organic free-range bones and organic vegetables"
            }
            src={
              "https://files.growaov.com/kettleandfire.myshopify.com/images/regen-chicken.jpg"
            }
          />
        </VStack>
      </Container>
    </Container>
  );
};

export default AlsoLove;
const styles = {
  containerBg: {
    background:
      ' url("src/assets/images/propWave.svg") no-repeat top center,#FFF9EE',
  },
};
