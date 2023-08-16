import React, { useState } from "react";
import { Button, Divider, List, Row, Typography } from "antd";
import { DeleteOutlined, LeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import s from "./Cart.module.css";
import { Link } from "react-router-dom";
import { HOME_PATH } from "./../../utils/variables";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import CartItem from "../../components/CartItem/CartItem";
import { getTotalDressCount } from "../../utils/helpers";
import { clearItems, removeItem, selectCart } from "../../redux/slices/cartSlice";
import ModalApp from "./../../components/ModalApp/ModalApp";
import { ICartDress } from "../../types/types";

const { Text } = Typography;

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selected, setSelected] = useState<ICartDress | null>(null);

  const { cartItems, totalPrice } = useSelector(selectCart);

  const showModal = () => {
    setOpen(true);
  };

  const handleOkClear = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      dispatch(clearItems());
      setConfirmLoading(false);
    }, 2000);
  };

  const onClickClear = () => {
    showModal();
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const showModalItem = (item: ICartDress) => {
    setSelected(item);
    setOpenItem(true);
  };

  const handleOkRemoveItem = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenItem(false);
      dispatch(removeItem(selected as ICartDress));
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <ModalApp
        title="Очистка корзины"
        modalText="Вы уверены, что хотите очистить корзину?"
        open={open}
        confirmLoading={confirmLoading}
        handleOk={handleOkClear}
        handleCancel={handleCancel}
      />
      <ModalApp
        title="Удаление товара"
        modalText="Вы уверены, что хотите удалить товар?"
        open={openItem}
        confirmLoading={confirmLoading}
        handleOk={handleOkRemoveItem}
        handleCancel={handleCancel}
      />
      <Row justify="space-between" align="middle">
        <Row>
          <ShoppingCartOutlined className={s.title} />
          <h1 className={s.title}>&nbsp;Корзина</h1>
        </Row>
        <Button type="text" icon={<DeleteOutlined />} onClick={onClickClear}>
          Очистить корзину
        </Button>
      </Row>
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item, index) => (
          <CartItem item={item} key={index} showModalItem={showModalItem} />
        )}
      />
      <Divider />
      <Row justify="space-between">
        <Row>
          <Text>Всего товаров:&nbsp;</Text>
          <Text className={s.text}>{getTotalDressCount(cartItems)} шт.</Text>
        </Row>
        <Row>
          <Text>Сумма заказа:&nbsp;</Text>
          <Text className={s.text}>{totalPrice} ₽</Text>
        </Row>
      </Row>
      <Row justify="space-between" className={s.wrapper}>
        <Link to={HOME_PATH}>
          <Button className={s.button} type="primary" size="large" icon={<LeftOutlined />}>
            Вернуться назад
          </Button>
        </Link>
        <Button type="primary" size="large">
          Оплатить сейчас
        </Button>
      </Row>
    </>
  );
};

export default Cart;
