import React from "react";

import GoHome from "Component/GoHome";
import SunAndMoon from "./SunAndMoon";
import Monsters from "./Monsters";
import Loading from "./Loading";

const MainPage = () => {
  return (
    <>
      <SunAndMoon />
      <Monsters />
      <GoHome />
      <Loading />
    </>
  );
};

export default MainPage;
