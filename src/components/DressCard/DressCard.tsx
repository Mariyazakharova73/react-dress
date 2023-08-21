import React, { FC, useState } from "react";
import {
  Card,
  Radio,
  Divider,
  Typography,
  Space,
  Button,
  Badge,
  Skeleton,
  RadioChangeEvent,
} from "antd";
import s from "./DressCard.module.css";
import cn from "classnames";
import { PlusOutlined } from "@ant-design/icons";
import { sizesArr, WHITE_COLOR } from "./../../utils/variables";
import { ICartDress, IDress, Status, TColor, TSize } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addItem } from "../../redux/slices/cartSlice";
import { selectStatus } from "../../redux/slices/dressesSlice";
import { ButtonColor } from "../../components";
import { selectCartItem } from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils/helpers";
const { Meta } = Card;
const { Text } = Typography;

interface IDressCardProps {
  item: IDress;
}

export const DressCard: FC<IDressCardProps> = ({ item }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(selectStatus);
  const [color, setColor] = useState<TColor>("Светлое");
  const [size, setSize] = useState<TSize>("42");

  const changeColor = (e: RadioChangeEvent) => {
    setColor(e.target.value);
  };

  const changeSize = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const isLoading = status === Status.LOADING;

  const cartItem = useSelector(selectCartItem(item));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddDress = () => {
    const { id, title, price } = item;
    const dress = {
      id,
      title,
      price,
      imageUrl: getImageUrl(color, item),
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
            src={getImageUrl(color, item)}
            onClick={() => navigate(`dress/${item.id}`)}
          />
        )
      }
      hoverable
      className={s.card}
    >
      <Meta title={item.title} />
      <Divider className={s.divider} plain />
      <ButtonColor item={item} changeColor={changeColor} color={color} />
      <Radio.Group className={cn(s.sizeWrapper)} value={size} onChange={changeSize}>
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
