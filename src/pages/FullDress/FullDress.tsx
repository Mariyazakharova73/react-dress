import React, { FC, useEffect, useState } from "react";
import { Carousel, Space, Image, Row, Col, Collapse, Spin, RadioChangeEvent } from "antd";
import { BASE_URL, dressDescription } from "./../../utils/variables";
import ButtonColor from "./../../components/ButtonColor/ButtonColor";
import s from "./FullDress.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IDress, TColor } from "./../../types/types";
import { getImageUrlArr } from "../../utils/helpers";

const FullDress: FC = () => {
  const [selectedDress, setSelectedDress] = useState<IDress | null>(null);
  const [color, setColor] = useState<TColor>("Светлое");

  const changeColor = (e: RadioChangeEvent) => {
    setColor(e.target.value);
  };

  const { id } = useParams();

  useEffect(() => {
    async function fetchDress() {
      try {
        const { data } = await axios.get(`${BASE_URL}/${id}`);
        setSelectedDress(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchDress();
  }, []);

  if (!selectedDress) {
    return (
      <Row justify="center">
        <Spin size="large" />
      </Row>
    );
  }

  return (
    <Row wrap={true} justify="center">
      <Col span={12} className={s.column}>
        <h3 className={s.title}>{selectedDress.title}</h3>
        <Carousel dotPosition="left" autoplay effect="fade">
          {getImageUrlArr(color, selectedDress).map((i) => (
            <Space size={12}>
              <Image
                //width={400}
                src={i}
                className={s.image}
              />
            </Space>
          ))}
        </Carousel>
      </Col>
      <Col span={12} className={s.column}>
        <ButtonColor item={selectedDress as IDress} color={color} changeColor={changeColor} />
        <Collapse defaultActiveKey={["1"]} ghost items={dressDescription} />
      </Col>
    </Row>
  );
};

export default FullDress;
