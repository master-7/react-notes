import React from 'react'

import { Button } from './Button';
import { IBaseProps } from './IProps';

export const GreenButton = ({ onClick, children }: IBaseProps) => 
  <Button onClick={onClick} color="" background="">{children}</Button>