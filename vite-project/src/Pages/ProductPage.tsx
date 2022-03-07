import React, { useState, Suspense, lazy } from "react";
import Layout from "../sections/Layout/Layout";
import Product from "../sections/Product Page/Product";
import ProductProps from "../sections/Product Page/ProductProps";
import { Spinner } from "@chakra-ui/react";

const NotSure = lazy(() => import("../sections/Product Page/Reviews"));
const Reviews = lazy(() => import("../sections/Product Page/NotSure"));
const AlsoLove = lazy(() => import("../components/Product Page/AlsoLove"));
const ScrollToTopOnMount = lazy(() => import("../utils/ScrollToTop"));
const ScrollTopSmoothBtn = lazy(
  () => import("../components/Layout/ScrollTopSmoothBtn")
);
const RewardButton = lazy(
  () => import("../components/Layout/rc-reward/RewardButton")
);

const RcReward = lazy(() => import("../components/Layout/rc-reward/RcReward"));

const PageProduct = () => {
  const [openReward, setOpenReward] = useState(false);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <ScrollToTopOnMount />
        <RewardButton isOpen={openReward} onOpen={setOpenReward} />
        {openReward && <RcReward isOpen={openReward} />}
      </Suspense>
      <Product />
      <ProductProps />

      <Suspense fallback={<Spinner />}>
        <Reviews />
        <NotSure />
        <AlsoLove />
        <ScrollTopSmoothBtn />
      </Suspense>
    </Layout>
  );
};

export default PageProduct;
