import React from 'react'
import styled from '@emotion/styled'

import { IBaseProps } from './IProps';

interface IProps extends IBaseProps {
  color?: string
  background?: string
}

export const Button = (props: IProps) => 
  <BaseButton {...props} />

const BaseButton = styled.button<IProps>`
  width: 100px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-shadow: 0px 1px 0px #2f6627;
  border: 1px solid #18ab29;
  border-radius: 28px;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 8px;
  text-transform: uppercase;
  text-decoration: none;
`