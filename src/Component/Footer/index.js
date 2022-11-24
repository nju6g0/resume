import React from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { GiCherish } from "react-icons/gi";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Footer = () => {
  const location = useLocation();
  const querys = qs.parse(location.search, { ignoreQueryPrefix: true });
  const path = location.pathname.replace(/^\//, "");

  const hasDesigner = path === "thef2e" && querys.tab === "scrum";

  return (
    <div className={cx("footer")}>
      <GiCherish />
      2022 YiShan, Su /&nbsp;
      {hasDesigner && (
        <>
          <a
            href="https://2022.thef2e.com/users/12061549261454740203"
            target="_blank"
            rel="noreferrer"
          >
            UI Design - EG
          </a>
          &nbsp;/
        </>
      )}{" "}
      Thank you for coming.
    </div>
  );
};

export default Footer;
