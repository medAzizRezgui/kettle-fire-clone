import { Grid } from "@chakra-ui/react";
import React from "react";
import ThumbGridITem from "./ThumbGridITem";
function CustomGridModal(props: {
  onClick: () => void;
  onClick1: () => void;
  onClick2: () => void;
  onClick3: () => void;
  onClick4: () => void;
}) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
      <ThumbGridITem
        onClick={props.onClick}
        src={
          "https://cdn.shopify.com/s/files/1/1775/1825/products/2-kf-amazon-classic-chicken-nutrition_400x400.jpg?v=1629298069"
        }
      />
      <ThumbGridITem
        onClick={props.onClick1}
        src={
          "https://cdn.shopify.com/s/files/1/1775/1825/products/7-Ingredients-Chicken-Bone-Broth_400x400.jpg?v=1629298069"
        }
      />
      <ThumbGridITem
        onClick={props.onClick2}
        src={
          "https://cdn.shopify.com/s/files/1/1775/1825/products/2_chicken-lifestyle-pouring-square_400x400.png?v=1629307716"
        }
      />
      <ThumbGridITem
        onClick={props.onClick3}
        src={
          "https://cdn.shopify.com/s/files/1/1775/1825/products/3_chicken-lifestyle-woman-pouring-square_400x400.png?v=1629307783"
        }
      />
      <ThumbGridITem
        onClick={props.onClick4}
        src={
          "https://cdn.shopify.com/s/files/1/1775/1825/products/4_chicken-lifestyle-woman-pouring-square_400x400.jpg?v=1629307720"
        }
      />
    </Grid>
  );
}
export default CustomGridModal;
