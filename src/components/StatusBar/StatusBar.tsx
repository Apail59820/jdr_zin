import { StatusTypes } from "../../models/StatTypes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { updateUser } from "../../services/users";
import { updateUserSlice } from "../../store/slices/userSlice";

type Props = {
  status: StatusTypes;
};
const StatusBar = ({ status }: Props) => {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);

  const [values, setValues] = useState<{ current: number; max: number }>({
    current: 0,
    max: 0,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user) {
      let currentValue = 0;
      let maxValue = 0;

      switch (status) {
        case "health":
          currentValue = user.health as number;
          maxValue = user.maxHealth as number;
          break;
        case "energy":
          currentValue = user.energy as number;
          maxValue = user.maxEnergy as number;
          break;
        case "mana":
          currentValue = user.mana as number;
          maxValue = user.maxMana as number;
          break;
        default:
          break;
      }

      setValues({ current: currentValue, max: maxValue });
    }
  }, [user, status]);

  const increaseValue = () => {
    if (values.current < values.max && user?.id) {
      const newValues = { current: values.current + 1, max: values.max };

      updateUser(user.id, { [status]: newValues.current }).then((res) => {
        if (res) {
          dispatch(updateUserSlice(res));
        }
      });
    }
  };

  const decreaseValue = () => {
    if (values.current >= 1 && user?.id) {
      const newValues = { current: values.current - 1, max: values.max };

      updateUser(user.id, { [status]: newValues.current }).then((res) => {
        if (res) {
          dispatch(updateUserSlice(res));
        }
      });
    }
  };

  return (
    <div className="status-bar-wrapper">
      <div className="decrease-value" onClick={decreaseValue} />
      <div className={`status-bar ${status}-bar`}>
        <div className="status-wrapper">
          <div className="values">
            {values.current} / {values.max}
          </div>
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
      <div className="increase-value" onClick={increaseValue} />
    </div>
  );
};

export default StatusBar;
