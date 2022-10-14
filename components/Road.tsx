import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { NextPage } from "next";

interface Props {
    snake?: boolean;
    road?: boolean;
    food?: boolean;
}

const SnakeOrWhat = styled(Box)<{ food?: boolean, snake?: boolean }>(({ theme, food, snake, }) => ({
    width: "5%",
    height: "100%",
    // backgroundColor: color,
    backgroundColor: food ? 'red' : snake ? 'green' : 'white',
    border: "1px solid silver",
}))

const Road: NextPage<Props> = props => {
  const { snake, food } = props;
  useEffect(() => {
  }, [])
  return (
    <SnakeOrWhat snake={snake} food={food} />
  )
}

export default Road