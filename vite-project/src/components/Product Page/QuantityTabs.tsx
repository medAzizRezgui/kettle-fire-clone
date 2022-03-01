import React from "react";
import { HStack, TabList, Tabs } from "@chakra-ui/react";
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
      <TabList display={"flex"}>
        <HStack align={"center"} justify={"space-between"} w={"100%"}>
          {data.map((item, i) => (
            <QuantityTab key={i} price={item.price} packs={item.packs} />
          ))}
        </HStack>
      </TabList>
    </Tabs>
  );
};

export default QuantityTabs;
