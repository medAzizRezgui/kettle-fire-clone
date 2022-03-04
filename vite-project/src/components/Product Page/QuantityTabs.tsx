import React from "react";
import { TabList, Tabs, Grid, GridItem } from "@chakra-ui/react";
import QuantityTab from "./QuantityTab";

const data = [
  {
    price: 7.99,
    packs: "1-Pack",
  },
  {
    price: 7.99,
    packs: "6-Pack",
  },
  {
    price: 7.76,
    packs: "12-Pack",
  },
  {
    price: 7.49,
    packs: "18-Pack",
  },
];
type Props = {
  handleChange: (index: number) => void;
};
const QuantityTabs: React.FC<Props> = ({ handleChange }) => {
  return (
    <Tabs
      w={"100%"}
      variant="unstyled"
      mt={"30px"}
      onChange={(e) => handleChange(e)}
    >
      <TabList>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", sm: "repeat(4,1fr)" }}
          w={"100%"}
          gap={2}
        >
          {data.map((item, i) => (
            <GridItem w={"100%"}>
              <QuantityTab key={i} price={item.price} packs={item.packs} />
            </GridItem>
          ))}
        </Grid>
      </TabList>
    </Tabs>
  );
};

export default QuantityTabs;
