import React, { FC, useState } from "react";
import { Card, Radio, Divider, Typography, Space, Button, Badge } from "antd";
import s from "./DressCard.module.css";
import cn from "classnames";
import { PlusOutlined } from "@ant-design/icons";
import { IDress } from "./../../types/types";
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
      //title="Card title"
      cover={<img alt="dress" className={s.image} src={true ? item.imageUrl[0] : item.imageUrl2} />}
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
        <Radio.Button value="Светлое">Светлое</Radio.Button>
        <Radio.Button value="Тёмное">Тёмное</Radio.Button>
      </Radio.Group>
      <Radio.Group
        className={cn(s.sizeWrapper)}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio.Button value="42">42</Radio.Button>
        <Radio.Button value="44">44</Radio.Button>
        <Radio.Button value="46">46</Radio.Button>
        <Radio.Button value="48">48</Radio.Button>
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
