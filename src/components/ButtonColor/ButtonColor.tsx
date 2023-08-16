import React, { FC } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { IDress } from "../../types/types";
import { colorArr } from "../../utils/variables";
import s from "./ButtonColor.module.css";

interface IButtonColorProps {
  item: IDress;
  changeColor: (e: RadioChangeEvent) => void;
  color: string;
}

const ButtonColor: FC<IButtonColorProps> = ({ item, changeColor, color }) => {
  return (
    <Radio.Group className={s.colorWrapper} value={color} onChange={changeColor}>
      {colorArr.map((c, i) => {
        return (
          <Radio.Button
            key={i}
            value={c.name}
            disabled={!item.types.some((type: number) => type === c.code)}
          >
            {c.name}
          </Radio.Button>
        );
      })}
    </Radio.Group>
  );
};

export default ButtonColor;
