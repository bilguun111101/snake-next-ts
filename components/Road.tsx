import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { NextPage } from "next";

interface Props {
    snake?: boolean;
    road?: boolean;
    food?: boolean;
}

const SnakeOrWhat = styled(Box)<{ color?: string }>(({ theme, color }) => ({
    width: "5%",
    height: "100%",
    backgroundColor: color,
    border: "1px solid silver",
}))

const Road: NextPage<Props> = props => {
  const { snake, road, food } = props
  const [color, setColor] = useState<string>("");
  const check = () => {
    let saveColor = "white";
    if(food) saveColor = "red";
    if(snake) saveColor = "green";
    setColor(saveColor);
  }
  useEffect(() => {
    check();
    return () => check();
  }, [snake, road, food])
  return (
    <SnakeOrWhat color={color} />
  )
}

export default Road