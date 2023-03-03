import React from 'react';
import styled from 'styled-components';

export const CommentUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;

  & h3,
  & p {
    word-break: break-all;
  }

  & img {
    border-radius: 50%;
  }

  @media (max-width: 1300px)  {
    width: 20%;
  }
`;

export const CommentControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10%;
  text-align: center;

  & .MuiButton-contained {
    margin-right: 5px;
  }

  & .MuiButton-contained:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1300px)  {
    width: 15%;
  }
`;

export const CommentContainer = styled.li`
  display: flex;
  margin-bottom: 5px;
  padding: 5px;

  border: 1px solid transparent;
  border-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cfilter id='blurMe'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='3' /%3E%3C/filter%3E%3Csymbol id='card' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath d='M10,0h60c7,1+9,3+10,10v60h-10v10h-60a10,10+0,00-10-10v-60Z'/%3E%3C/symbol%3E%3C/defs%3E%3Cuse xlink:href='%23card' style='fill:%23000; opacity: 0.4; filter:url(%23blurMe);' x='10' y='15' width='80' height='80'/%3E%3Cuse xlink:href='%23card' style='fill:%23ffc' x='10' y='10' width='80' height='80'/%3E%3C/svg%3E%0A") 20 fill / 20px / 10px stretch;

  & p,
  & h3 {
    margin: 0;
  }
`;

export const CommentText = styled.p`
  width: 75%;
  padding: 3px;
  word-break: break-all;
`;

export const Raiting = styled.p`
  font-size: 50px;
`;