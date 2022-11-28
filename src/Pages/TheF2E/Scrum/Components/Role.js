import React from "react";
import PropTypes from "prop-types";

import { img_role_po, img_role_mm, img_role_ee, img_role_gg } from "../Assets";

const PO = "PO"; // product owner
const MM = "SM"; // scrum master"
const EE = "EE";
const GG = "GG";
export const ROLE_NAMES = {
  PO,
  MM,
  EE,
  GG,
};

const UP = "up";
const DOWN = "down";
export const ROLE_DIRECTIONS = {
  UP,
  DOWN,
};

const Role = ({ name, direction }) => {
  const getImgSrc = () => {
    let src = "";
    switch (name) {
      case MM:
        src = img_role_mm;
        break;
      case EE:
        src = img_role_ee;
        break;
      case GG:
        src = img_role_gg;
        break;
      case PO:
      default:
        src = img_role_po;
        break;
    }
    return src;
  };

  return (
    <img
      src={getImgSrc()}
      alt={name}
      style={{ transform: `rotate(${direction === UP ? "180deg" : 0})` }}
    />
  );
};

Role.defaultProps = {
  direction: DOWN,
};
Role.propTypes = {
  name: PropTypes.oneOf([PO, MM, EE, GG]).isRequired,
  direction: PropTypes.oneOf([UP, DOWN]),
};

export default Role;
