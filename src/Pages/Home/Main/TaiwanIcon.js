import React, { useState, useEffect } from "react";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Main = () => {
  const [isShrink, setIsShrink] = useState(false);
  useEffect(() => {
    const scrollHandler = (e) => {
      setIsShrink(window.scrollY > 0);
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className={cx("taiwanIcon")}>
      <ul className={cx(isShrink ? "shrink" : "")}>
        {/* picsumId:[11, 110, 129, 182, 195*, 200, 204*, 212] */}
        <li>
          <img src="https://picsum.photos/id/200/1280/900" alt="" />
        </li>
        <li>
          <img src="https://picsum.photos/id/212/1280/900" alt="" />
        </li>
      </ul>
      <div className={cx("description", isShrink ? "shrink" : "")}>
        <h1>Welcome YiShan's Resume</h1>
        <i className="twicon-main-island"></i>
        <i className="twicon-black-bear"></i>
        <i className="twicon-electric-pot"></i>
        <p>一個不小心入坑的商科生，覺得CSS很促咪的我是不是有點奇怪</p>
      </div>
    </section>
  );
};

export default Main;
