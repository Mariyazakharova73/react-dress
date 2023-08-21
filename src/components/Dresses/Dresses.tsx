import React, { FC } from "react";
import { Col, Row } from "antd";
import { DressCard, ErrorInfo } from "../../components";
import s from "./Dresses.module.css";
import { useSelector } from "react-redux";
import { selectDresses } from "../../redux/slices/dressesSlice";
import { Status } from "../../types/types";

export const Dresses: FC = () => {
  const { items, status } = useSelector(selectDresses);

  return (
    <div className={s.wrapper}>
      {status === Status.ERROR ? (
        <ErrorInfo />
      ) : (
        <>
          <h1 className={s.title}>Все платья</h1>
          <Row className={s.row}>
            {items.map((item: any) => {
              return (
                <Col key={item.id}>
                  <DressCard item={item} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
};
