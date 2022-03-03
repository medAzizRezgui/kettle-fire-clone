import React from "react";
import { Box, Container, VStack, Heading, Button } from "@chakra-ui/react";
type Props = {
  text: string;
  img: any;
  bg: string;
  color: string;
};
const RecipeItem: React.FC<Props> = ({ text, img, bg, color }) => {
  return (
    <Container
      variant={"responsive"}
      display={"flex"}
      justifyContent={"center"}
      mb={"20px"}
    >
      <Box
        bgImage={`url('${img}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        h={"400px"}
        w={{ base: "85%", sm: "60%", md: "100%" }}
        borderRadius={16}
        position={"relative"}
        mb={"25px"}
      >
        <VStack bg={bg} sx={styles.textBg}>
          <Heading
            color={"white"}
            textAlign={"center"}
            fontSize={"2xl"}
            sx={styles.text}
          >
            {text}
          </Heading>
          <Button color={color} sx={styles.button}>
            Make it
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default RecipeItem;
const styles = {
  text: {
    transition: "0.9s all ease-in-out",
    _hover: {
      textDecoration: "underline",
    },
  },
  textBg: {
    width: "100%",
    position: "absolute",
    borderRadius: "0 0 16px 16px",
    bottom: 0,
    h: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    bg: "white",
    width: "40%",
    margin: " 0 auto",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};
