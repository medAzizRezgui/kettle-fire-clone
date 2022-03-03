import React, { useState } from "react";

import RewardButton from "../../components/Layout/rc-reward/RewardButton";
import RcReward from "../../components/Layout/rc-reward/RcReward";
import HeroInfo from "../../components/Home Page/hero/HeroInfo";
const Hero = () => {
  const [openReward, setOpenReward] = useState(false);

  return (
    <>
      <RewardButton isOpen={openReward} onOpen={setOpenReward} />
      {openReward && <RcReward isOpen={openReward} />}

      <HeroInfo />
    </>
  );
};

export default Hero;
