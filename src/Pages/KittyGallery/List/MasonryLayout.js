import React, { useRef, useEffect, useState } from "react";
import { from } from "rxjs";
import { InView } from "react-intersection-observer";

import { getImagesListAPI } from "apis/gallery";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const MasonryLayout = () => {
  const fetchListener = useRef(null);
  const [datas, setDatas] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getList = () => {
      setIsLoading(true);
      const params = {
        params: {
          limit: 12,
          page: nowPage,
        },
      };
      fetchListener.current = from(getImagesListAPI(params)).subscribe(
        (res) => {
          if (res?.status === 200) {
            setDatas((prevState) => [...prevState, ...res.data]);
            setIsLoading(false);
          }
        }
      );
    };

    getList();
  }, [nowPage]);

  return (
    <>
      <div className={cx("MasonryLayout")}>
        {datas.map((img) => (
          <div className={cx("imgBox")}>
            <img src={img.url} alt="img.id" />
          </div>
        ))}
      </div>
      {isLoading && "loading..."}
      <InView
        as="div"
        onChange={(inView) => {
          if (nowPage >= 5 || isLoading) return;
          setNowPage((prevState) => prevState + 1);
        }}
      >
        <div className={cx("trigger")} />
      </InView>
    </>
  );
};

export default MasonryLayout;
