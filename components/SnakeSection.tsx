import _ from "lodash";
import Road from "./Road";
import React, { useEffect, useState } from "react";
import useGameLoop from "./GameLoop";
import { Box, styled } from "@mui/material"

const row: Number = 20;
const column: Number = 20;

const snakeFirstPosition = [[0, 0]];
const foodFirstPosition: Number[][] = [[5, 5]];

// Build snake all Section ***************************
const SnakeSectionPage = styled(Box)(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    ...theme.mixins.toolbar,
})) as typeof Box;

const Board = styled(Box)(({ theme }) => ({
    width: '600px',
    height: '600px',
    flexDirection: 'column',
    border: "0.2px solid #FFF",
})) as typeof Box;

const Column = styled(Box)(({ theme }) => ({
    height: '5%',
    width: '100%',
    display: 'flex',
})) as typeof Box;

// ***************************  build snake all Section  ***************************


const SnakeSection = () => {
  const yAxis: Number[] = Array(row).fill(0);
  const xAxis: Number[] = Array(column).fill(0);
  const [xMove, setXMove] = useState(1);
  const [yMove, setYMove] = useState(0);
  const [speed, setSpeed] = useState<number | null>(500);
  const [food, setFood] = useState(foodFirstPosition);
  const [snake, setSnake] = useState(snakeFirstPosition);

  const keyBoard = (e: KeyboardEvent) => {
    switch(e.key){
        case 'ArrowUp':
            setXMove(0);
            setYMove(-1);
            break;
        case 'ArrowDown':
            setXMove(0);
            setYMove(1);
            break;
        case 'ArrowLeft':
            setXMove(-1);
            setYMove(0);
            break;
        case 'ArrowRight':
            setXMove(1);
            setYMove(0);
            break;
        default:
            break;
    }
  }

  const move = () => {
    let snakeSave = snake;
    let snakeHeadSave = [snake[0][0] + xMove, snake[0][1] + yMove];
    snakeSave.pop();
    snakeSave.unshift(snakeHeadSave);
    setSnake(snakeSave);
  };

  useEffect(() => {
    document.addEventListener('keydown', keyBoard);
    return () => document.removeEventListener('keydown', keyBoard);
  }, [])
  useGameLoop(move, speed);
  return (
    <SnakeSectionPage>
        <Board>
            {_.map(yAxis, (el, yIdx) => {
                return(
                    <Column key={yIdx}>
                        {_.map(xAxis, (el, xIdx) => {
                            const foodPosition = _.some(food, (el, idx) => (el[0] === xIdx && el[1] === yIdx));
                            const snakePosition = _.some(snake, (el, idx) => (el[0] === xIdx && el[1] === yIdx));
                            return(
                                <Road snake={snakePosition} food={foodPosition} key={xIdx} />
                            )
                        })}
                    </Column>
                )
            })}
        </Board>
    </SnakeSectionPage>
  )
}

export default SnakeSection