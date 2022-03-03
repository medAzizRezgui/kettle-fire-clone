import React, { useState } from "react";
import Layout from "../sections/Layout/Layout";
import Product from "../sections/Product Page/Product";
import ProductProps from "../sections/Product Page/ProductProps";
import ScrollToTopOnMount from "../utils/ScrollToTop";
import RewardButton from "../components/Layout/rc-reward/RewardButton";
import RcReward from "../components/Layout/rc-reward/RcReward";
import ScrollTopSmoothBtn from "../components/Layout/ScrollTopSmoothBtn";
import Reviews from "../sections/Product Page/Reviews";
import AlsoLove from "../components/Product Page/AlsoLove";
const PageProduct = () => {
  const [openReward, setOpenReward] = useState(false);

  return (
    <Layout>
      <ScrollToTopOnMount />
      <RewardButton isOpen={openReward} onOpen={setOpenReward} />
      {openReward && <RcReward isOpen={openReward} />}
      <Product />
      <ProductProps />
      <Reviews />
      <AlsoLove />
      <ScrollTopSmoothBtn />
    </Layout>
  );
};

export default PageProduct;
