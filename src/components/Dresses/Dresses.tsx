import React from "react";
import { Col, Row } from "antd";
import DressCard from "./../DressCard/DressCard";
import s from "./Dresses.module.css";
import dresses from "../../utils/dresses.json";

const Dresses = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Все платья</h1>
      <Row className={s.row}>
        {dresses.map((item) => {
          return (
            <Col key={item.id}>
              <DressCard item={item}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dresses;
