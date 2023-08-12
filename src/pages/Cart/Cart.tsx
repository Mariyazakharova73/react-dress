import { Avatar, Button, Divider, List, Row, Typography } from "antd";
import React from "react";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  LeftOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import s from "./Cart.module.css";
import { MAIN_COLOR } from "../../utils/variables";
import { Link } from "react-router-dom";
import { HOME_PATH } from "./../../utils/variables";

const { Text } = Typography;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const Cart = () => {
  return (
    <>
      <Row justify="space-between" align="middle">
        <Row>
          <ShoppingCartOutlined className={s.title} />
          <h1 className={s.title}>&nbsp;Корзина</h1>
        </Row>
        <Button type="text" icon={<DeleteOutlined />}>
          Очистить корзину
        </Button>
      </Row>
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className={s.item}>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title="КОРОТКОЕ ПЛАТЬЕ-РУБАШКА"
              description="светлое, 42 р-р"
            />
            <Row align="middle">
              <Button
                type="text"
                shape="circle"
                icon={<MinusCircleOutlined className={s.circle} twoToneColor={MAIN_COLOR} />}
              />
              <Text>2</Text>
              <Button
                type="text"
                shape="circle"
                icon={<PlusCircleOutlined className={s.circle} />}
              />
            </Row>
            <Text className={s.price}>1599 руб.</Text>
            <Button type="text" shape="circle" icon={<CloseCircleOutlined />} />
          </List.Item>
        )}
      />
      <Divider />
      <Row justify="space-between">
        <Row>
          <Text>Всего товаров:&nbsp;</Text>
          <Text className={s.text}>3 шт.</Text>
        </Row>
        <Row>
          <Text>Сумма заказа:&nbsp;</Text>
          <Text className={s.text}>5000 ₽</Text>
        </Row>
      </Row>
      <Row justify="space-between" className={s.wrapper}>
        <Link to={HOME_PATH}>
          <Button className={s.button} type="primary" size="large" icon={<LeftOutlined />}>
            Вернуться назад
          </Button>
        </Link>
        <Button type="primary" size="large">Оплатить сейчас</Button>
      </Row>
    </>
  );
};

export default Cart;
