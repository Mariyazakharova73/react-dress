import React from "react";
import { Button, Empty } from "antd";
import { Link } from "react-router-dom";
import { HOME_PATH, IMAGE_URL } from "./../utils/variables";

const NotFound = () => {
  return (
    <Empty
      image={IMAGE_URL}
      imageStyle={{ height: 60 }}
      description={<span>К сожалению, ничего не найдено &#128542;</span>}
    >
      <Link to={HOME_PATH}>
        <Button type="primary">На главную</Button>
      </Link>
    </Empty>
  );
};

export default NotFound;
