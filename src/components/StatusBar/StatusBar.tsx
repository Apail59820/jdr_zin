import { StatusTypes } from "../../models/StatTypes";
import React, { useState } from "react";

type Props = {
  status: StatusTypes;
};
const StatusBar = ({ status }: Props) => {
  const [values, setValues] = useState<{ current: number; max: number }>({
    current: 20,
    max: 100,
  });

  return (
    <div className={`status-bar ${status}-bar`}>
      <div className="status-wrapper">
        <div className="values">{values.current} / {values.max}</div>
        <div
          className={status}
          style={
            {
              [`--curr-${status}`]: values.current,
              [`--max-${status}`]: values.max,
            } as React.CSSProperties
          }
        ></div>
      </div>
    </div>
  );
};

export default StatusBar;
