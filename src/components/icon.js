import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../shared/colors";

export const Icon = ({ id, name, color, size, iconPrefix, style, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={`${iconPrefix}, ${name}`}
      id={id}
      color={color || colors.white}
      size={size || "1x"}
      style={style}
      onClick={onClick}
    />
  );
};
