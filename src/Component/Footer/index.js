import React from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { GiCherish } from "react-icons/gi";

import { WEB as QUERY_TAB, SCRUM as QUERY_SCRUM } from 'Pages/TheF2E';

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const DESIGNER = {
  [QUERY_TAB]: {
    name: 'irena',
    link: 'https://2022.thef2e.com/users/12061549261454740005'
  },
  [QUERY_SCRUM]: {
    name: 'EG',
    link: 'https://2022.thef2e.com/users/12061549261454740203'
  }
}

const Footer = () => {
  const location = useLocation();
  const querys = qs.parse(location.search, { ignoreQueryPrefix: true });
  const path = location.pathname.replace(/^\//, "");

  const hasDesigner = path === "thef2e" && [QUERY_SCRUM, QUERY_TAB].some(tab => tab === querys.tab);
  const queryTab = querys.tab;

  return (
    <div className={cx("footer")}>
      <GiCherish />
      2022 YiShan, Su /&nbsp;
      {hasDesigner && (
        <>
          <a
            href={DESIGNER[queryTab].link}
            target="_blank"
            rel="noreferrer"
          >
            UI Design - {DESIGNER[queryTab].name}
          </a>
          &nbsp;/
        </>
      )}{" "}
      Thank you for coming.
    </div>
  );
};

export default Footer;
