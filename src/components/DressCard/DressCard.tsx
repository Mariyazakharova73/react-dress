import React, { FC, useState } from "react";
import { Card, Radio, Divider, Typography, Space, Button, Badge, Skeleton } from "antd";
import s from "./DressCard.module.css";
import cn from "classnames";
import { PlusOutlined } from "@ant-design/icons";
import { sizesArr, colorArr, WHITE_COLOR } from "./../../utils/variables";
import { ICartDress, IDress } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addItem } from "../../redux/slices/cartSlice";
const { Meta } = Card;
const { Text } = Typography;

interface IDressCardProps {
  item: IDress;
  isLoading: boolean;
}

const DressCard: FC<IDressCardProps> = ({ item, isLoading }) => {
  const dispatch: AppDispatch = useDispatch();

  const cartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find((cartDress) => cartDress.id === item.id)
  );

  const [color, setColor] = useState("Светлое");
  const [size, setSize] = useState("42");

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddDress = () => {
    const { id, title, price, imageUrl, imageUrlDark } = item;
    const dress = {
      id,
      title,
      price,
      imageUrl: color === "Светлое" ? imageUrl[0] : imageUrlDark[0],
      color,
      size,
    };
    dispatch(addItem(dress as ICartDress));
  };

  return (
    <Card
      loading={isLoading}
      cover={
        isLoading ? (
          <Skeleton.Image active={isLoading} className={s.skeleton} />
        ) : (
          <img
            alt="dress"
            className={s.image}
            src={color === "Светлое" ? item.imageUrl[0] : item.imageUrlDark[0]}
          />
        )
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
          {addedCount > 0 && <Badge count={addedCount} color={WHITE_COLOR} />}
        </Button>
      </Space>
    </Card>
  );
};

export default DressCard;
