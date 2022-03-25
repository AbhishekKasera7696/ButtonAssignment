import React from 'react';
import styled from "styled-components";



  const Button = styled.button`
  border: ${(props)=> props.border};
  background-color: ${(props)=> props.backgroundColor};
  border-radius: 5px;
  cursor: pointer;
  margin-top:2%;
  margin-left: 1%;
  margin-right: 1%;
  padding: 10px;
  background-color:${(props)=> props.background};
  color:${(props)=> props.color};
  
  
  &:hover {
     
      border: #1890FF;
      background-color: #1890FF;
      color:white;
      border: 1px solid #1890FF;
      transition: background-color 1s, color 1s;
  }

 
  `;




 export {Button}
