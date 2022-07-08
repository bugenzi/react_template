/* eslint-disable no-unused-vars */
import React, { useState } from "react";

type HandleToggle = (value: boolean | React.MouseEvent) => void;

export default (defaultValue = false): [boolean, HandleToggle] => {
  const [isOn, toggle] = useState<boolean>(defaultValue);

  const handleToggle: HandleToggle = (value) => {
    const toggleState = typeof value === "boolean" ? value : !isOn;

    toggle(toggleState);
  };

  return [isOn, handleToggle];
};
