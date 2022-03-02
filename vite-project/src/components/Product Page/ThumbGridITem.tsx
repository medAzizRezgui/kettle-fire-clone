import React from "react";
import { GridItem } from "@chakra-ui/react";
type Props = {
  src: string;
  onClick: () => void;
};

const ThumbGridItem: React.FC<Props> = ({ src, onClick }) => {
  return (
    <GridItem
      borderRadius={"5px"}
      boxShadow={"md"}
      bgSize={"cover"}
      bgImage={`url('${src}')`}
      w="50px"
      h="50px"
      onClick={() => onClick()}
    />
  );
};

export default ThumbGridItem;
