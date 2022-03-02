import React, { useState } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import CustomGridModal from "./ThumbGrid";
import ThumbSwiper from "./ThumbSwiper";

const ImageThumbs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [initIndex, setInitIndex] = useState(0);

  const handleChange = (id: number) => {
    onOpen();
    setInitIndex(id);
  };
  return (
    <>
      <CustomGridModal
        onClick={() => handleChange(0)}
        onClick1={() => handleChange(1)}
        onClick2={() => handleChange(2)}
        onClick3={() => handleChange(3)}
        onClick4={() => handleChange(4)}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"90%"} bg="white" borderRadius={"12px"}>
          <ModalBody p={0}>
            <ThumbSwiper initIndex={initIndex} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageThumbs;
