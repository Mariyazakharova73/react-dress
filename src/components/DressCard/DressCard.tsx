import React, { FC, useState } from "react";
import { Card, Radio, Divider, Typography, Space, Button, Badge } from "antd";
import s from "./DressCard.module.css";
import cn from "classnames";
import { PlusOutlined } from "@ant-design/icons";
import { sizesArr, colorArr } from "./../../utils/variables";
const { Meta } = Card;
const { Text } = Typography;

interface IDressCardProps {
  item: any;
}

const DressCard: FC<IDressCardProps> = ({ item }) => {
  const [color, setColor] = useState("Светлое");
  const [size, setSize] = useState("42");
  const [dressCount, setDressCount] = useState(0);

  const onClickAddDress = () => {
    setDressCount((prev) => prev + 1);
  };

  return (
    <Card
      cover={
        <img
          alt="dress"
          className={s.image}
          src={color === "Светлое" ? item.imageUrl[0] : item.imageUrlDark[0]}
        />
      }
      hoverable
      className={s.card}
    >
      <Meta title={item.title} />
      <Divider className={s.divider} plain />
      <Radio.Group
        className={s.colorWrapper}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
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
      <Radio.Group
        className={cn(s.sizeWrapper)}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        {sizesArr.map((s: number | string, index) => {
          return (
            <Radio.Button
              key={index}
              value={String(s)}
              disabled={!item.sizes.some((i: number) => i === s)}
            >
              {s}
            </Radio.Button>
          );
        })}
      </Radio.Group>
      <Space className={cn(s.buttonWrapper)}>
        <Text>{item.price} ₽</Text>
        <Button
          onClick={onClickAddDress}
          size="large"
          type="primary"
          icon={<PlusOutlined />}
          //loading
        >
          Добавить&nbsp;
          {dressCount !== 0 && <Badge count={dressCount} color="#ffff" />}
        </Button>
      </Space>
    </Card>
  );
};

export default DressCard;
