import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import Entry from "./Scenes/Entry";
import ProductBacklog from "./Scenes/ProductBacklog";
import Planning from "./Scenes/Planning";
import SprintTask from "./Scenes/SprintTask";
import SprintIntro from "./Scenes/SprintIntro";
import Retro from "./Scenes/Retro";
import Complete from "./Scenes/Complete";
import Progress from "./Components/Progress";
import NotAvailable from "./Scenes/NotAvailable";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

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
    if (!step) {
      handleChangeStep(ENTRY);
    } else {
      setNowStep(step);
    }
  }, [step]);

  return (
    <div>
      <Helmet>
        <title>Scrum 新手村</title>
        <meta name="description" content="The F2E 4th week 3" />
        <meta property="og:title" content="Scrum 新手村" />
        <meta property="og:image" content="https://images.thef2e.com/2022/works/12061549261454740203_2022-11-20T04:05:05.694Z.png" />
      </Helmet>
      <Context.Provider
        value={{
          goStep: handleChangeStep,
        }}
      >
        <div className={cx("wrapper")}>
          {isMobile() ? (
            <NotAvailable />
          ) : (
            <>
              <Progress nowStep={nowStep} />
              {renderComponent()}
            </>
          )}
        </div>
      </Context.Provider>
    </div>
  );
};
export default Scrum;
