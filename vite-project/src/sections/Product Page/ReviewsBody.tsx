import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Text,
  TabPanel,
} from "@chakra-ui/react";
import ReviewItem from "./ReviewItem";
import React from "react";
const ReviewsBody = () => {
  return (
    <Tabs variant={"unstyled"}>
      <TabList>
        <Tab
          _focus={{
            outline: 0,
          }}
          _selected={{
            color: "primary",
            borderBottom: "2px solid #aa131d",
          }}
        >
          <Text fontWeight={500}>REVIEWS</Text>
        </Tab>
        <Tab
          _focus={{
            outline: 0,
          }}
          _selected={{
            color: "primary",
            borderBottom: "2px solid #aa131d",
          }}
        >
          <Text>QUESTIONS</Text>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text>7073 Reviews</Text>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ReviewsBody;
