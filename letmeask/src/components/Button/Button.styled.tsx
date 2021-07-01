
import styled from 'styled-components';
import {ButtonProps} from './Button';

export const MainButton = styled.button`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${(props: ButtonProps) => props.isOutlined ? '#fff' : '#835afd'};
    padding: 0 32px;
    color: ${(props: ButtonProps) => props.isOutlined ? '#835afd' : '#fff'};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: ${(props: ButtonProps) => props.isOutlined ? '1px solid #835afd' : '0'};
    transition: filter 0.2s ease;

    img {
      margin-right: 8px;
    }
  
    &:not(:disabled):hover {
      filter: brightness(0.9);
    }
  
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    

`
