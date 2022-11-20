import React, { useState } from "react";

import Entry from "./Entry";
import ProductBacklog from "./ProductBacklog";
import Planning from "./Planning";
import SprintTask from "./SprintTask";
import SprintIntro from "./SprintIntro";
import Retro from "./Retro";
import Complete from "./Complete";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const ENTRY = "entry";
const PRODUCT_BACKLOG = "productBacklog";
const PLANNING = "planning";
const SPRINT_TASK = "sprintTask ";
const SPRINT_INTRO = "sprintIntro";
const RETRO = "retro";
const COMPLETE = "complete";

export const STEPS_KEY = {
  ENTRY, PRODUCT_BACKLOG, PLANNING, SPRINT_TASK, SPRINT_INTRO, RETRO, COMPLETE
};

const STEPS = {
  [STEPS_KEY.ENTRY]: <Entry />,
  [STEPS_KEY.PRODUCT_BACKLOG]: <ProductBacklog />,
  [STEPS_KEY.PLANNING]: <Planning />,
  [STEPS_KEY.SPRINT_TASK]: <SprintTask />,
  [STEPS_KEY.SPRINT_INTRO]: <SprintIntro />,
  [STEPS_KEY.RETRO]: <Retro />,
  [STEPS_KEY.COMPLETE]: <Complete />
};

const Scrum = () => {
  const [nowStep, setNowStep] = useState(STEPS_KEY.ENTRY);

  const renderComponent = () => {
    return STEPS[nowStep];
  };

  return <div className={cx("wrapper")}>{renderComponent()}</div>;
};
export default Scrum;
