import React from "react";
import PropTypes from "prop-types";

import img_role_po from "image/F2E_scrum/Role_po.png";
import img_role_mm from "image/F2E_scrum/Role_mm.png";
import img_role_ee from "image/F2E_scrum/Role_ee.png";
import img_role_gg from "image/F2E_scrum/Role_gg.png";

const PO = "product owner";
const MM = "scrum master";
const EE = "ee";
const GG = "gg";
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
