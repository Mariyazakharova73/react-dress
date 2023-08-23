import React, { FC } from "react";
import { Avatar, Button, List, Row, Typography } from "antd";
import { CloseCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import s from "./CartItem.module.css";
import { ICartDress } from "../../types/types";
import { AppDispatch } from "../../redux/store";
import { addItem, minusItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const { Text } = Typography;

interface ICartitemProps {
  item: ICartDress;
  showModalItem: (item: ICartDress) => void;
}

export const CartItem: FC<ICartitemProps> = ({ item, showModalItem }) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    if (item.count <= 1) {
      showModalItem(item);
    } else {
      dispatch(minusItem(item));
    }
  };

  const onClickRemove = () => {
    showModalItem(item);
  };

  return (
    <>
      <List.Item className={s.item}>
        <List.Item.Meta
          className={s.title}
          avatar={<Avatar src={item.imageUrl} />}
          title={item.title}
          description={`${item.color}, ${item.size} р-р`}
        />
        <Row align="middle">
          <Text>{item.price} x</Text>
          <Button
            type="text"
            shape="circle"
            icon={<MinusCircleOutlined onClick={onClickMinus} />}
          />
          <Text>{item.count}</Text>
          <Button type="text" shape="circle" icon={<PlusCircleOutlined onClick={onClickPlus} />} />
          <Text>=&nbsp;</Text>
          <Text className={s.price}>{item.price * item.count} ₽</Text>
          <Button
            type="text"
            shape="circle"
            icon={<CloseCircleOutlined onClick={onClickRemove} />}
          />
        </Row>
      </List.Item>
    </>
  );
};
