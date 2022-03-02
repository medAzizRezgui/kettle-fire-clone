import React, { useState } from "react";
import Layout from "../sections/Layout/Layout";
import Product from "../sections/Product Page/Product";
import ProductProps from "../sections/Product Page/ProductProps";
import ScrollToTopOnMount from "../components/utils/ScrollToTop";
import RewardButton from "../components/Home Page/rc-reward/RewardButton";
import RcReward from "../components/Home Page/rc-reward/RcReward";
const PageProduct = () => {
  const [openReward, setOpenReward] = useState(false);

  return (
    <Layout>
      <ScrollToTopOnMount />
      <RewardButton isOpen={openReward} onOpen={setOpenReward} />
      {openReward && <RcReward isOpen={openReward} />}

      <Product />
      <ProductProps />
    </Layout>
  );
};

export default PageProduct;
