import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";

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
const SPRINT_TASK = "Sprint Task ";
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
  const location = useLocation();
  const history = useHistory();
  const querys = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { step } = querys;
  const [nowStep, setNowStep] = useState(STEPS_KEY.ENTRY);

  const handleChangeStep = (step) => {
    history.push({
      pathname: location.pathname,
      search: qs.stringify({ ...querys, step }),
    });
  };
  const renderComponent = () => {
    return STEPS[nowStep];
  };

  useEffect(() => {
    if(!step){
      handleChangeStep(ENTRY)
    }else{
      setNowStep(step);
    }
  }, [step]);

  return (
    <Context.Provider
      value={{
        goStep: handleChangeStep,
      }}
    >
      <div className={cx("wrapper")}>
        <Progress nowStep={nowStep} />
        {renderComponent()}
      </div>
    </Context.Provider>
  );
};
export default Scrum;
