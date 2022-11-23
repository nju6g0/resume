import React, { useState } from "react";

import Entry from "./Entry";
import ProductBacklog from "./ProductBacklog";
import Planning from "./Planning";
import SprintTask from "./SprintTask";
import SprintIntro from "./SprintIntro";
import Retro from "./Retro";
import Complete from "./Complete";
import Progress from "./Progress";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const ENTRY = "Precursor";
const PRODUCT_BACKLOG = "Product Backlog";
const PLANNING = "Planning";
const SPRINT_TASK = "SprintTask ";
const SPRINT_INTRO = "Sprint Intro";
const RETRO = "Retro";
const COMPLETE = "Complete";

export const STEPS_KEY = {
  ENTRY,
  PRODUCT_BACKLOG,
  PLANNING,
  SPRINT_TASK,
  SPRINT_INTRO,
  RETRO,
  COMPLETE,
};

const STEPS = {
  [STEPS_KEY.ENTRY]: <Entry />,
  [STEPS_KEY.PRODUCT_BACKLOG]: <ProductBacklog />,
  [STEPS_KEY.PLANNING]: <Planning />,
  [STEPS_KEY.SPRINT_TASK]: <SprintTask />,
  [STEPS_KEY.SPRINT_INTRO]: <SprintIntro />,
  [STEPS_KEY.RETRO]: <Retro />,
  [STEPS_KEY.COMPLETE]: <Complete />,
};

export const Context = React.createContext();

const Scrum = () => {
  const [nowStep, setNowStep] = useState(STEPS_KEY.ENTRY);

  const renderComponent = () => {
    return STEPS[nowStep];
  };

  return (
    <Context.Provider
      value={{
        goStep: (step) => {
          setNowStep(step);
        },
      }}
    >
      <div className={cx("wrapper")}>
        <Progress nowStep={nowStep}   />
        {renderComponent()}
      </div>
    </Context.Provider>
  );
};
export default Scrum;
