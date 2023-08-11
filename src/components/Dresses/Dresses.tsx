import React, { FC } from "react";
import { Col, Row } from "antd";
import DressCard from "./../DressCard/DressCard";
import s from "./Dresses.module.css";

interface IDressesProps {
  dresses: any;
  isLoading: boolean
}

const Dresses: FC<IDressesProps> = ({ dresses, isLoading }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Все платья</h1>
      <Row className={s.row}>
        {dresses.map((item: any) => {
          return (
            <Col key={item.id}>
              <DressCard item={item} isLoading={isLoading}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dresses;
