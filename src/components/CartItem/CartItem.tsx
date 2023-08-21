import React, { FC } from "react";
import { Avatar, Button, List, Row, Typography } from "antd";
import { CloseCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import s from "./CartItem.module.css";
import { MAIN_COLOR } from "../../utils/variables";
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
    //dispatch(removeItem(item));
  };

  return (
    <>
      <List.Item className={s.item}>
        <List.Item.Meta
          avatar={<Avatar src={item.imageUrl} />}
          title={item.title}
          description={`${item.color}, ${item.size} р-р`}
        />
        <Row align="middle">
          <Text>{item.price} x</Text>
          <Button
            type="text"
            shape="circle"
            icon={
              <MinusCircleOutlined
                className={s.circle}
                twoToneColor={MAIN_COLOR}
                onClick={onClickMinus}
              />
            }
          />
          <Text>{item.count}</Text>
          <Button
            type="text"
            shape="circle"
            icon={<PlusCircleOutlined className={s.circle} onClick={onClickPlus} />}
          />
          <Text>=</Text>
        </Row>
        <Text className={s.price}>{item.price * item.count} ₽</Text>
        <Button type="text" shape="circle" icon={<CloseCircleOutlined onClick={onClickRemove} />} />
      </List.Item>
    </>
  );
};
