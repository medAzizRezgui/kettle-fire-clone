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
      boxSize={{ base: "60px", sm: "80px", md: "120px" }}
      onClick={() => onClick()}
    />
  );
};

export default ThumbGridItem;
