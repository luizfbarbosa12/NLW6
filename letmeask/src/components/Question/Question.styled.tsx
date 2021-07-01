import styled from 'styled-components'
import {QuestionProps} from './Question'


export const QuestionArea = styled.div<Partial<QuestionProps>>`
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    margin-top: ${(props) => props.question ? 'margin-top: 8px' : '0'};
    color: ${(props) => props.isHighlighted ? '#f4f0ff' : '#29292e'};

    p {
      color: #29292e;
    }
  
    footer {       
    display: flex;
    justify-content: space-between;      
    align-items: center;
    margin-top: 24px;
  
    > div {
    display: flex;
    gap: 16px;
    }

    }
    .user-info {
      display: flex;
      align-items: center;
  
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
  
      > span {
        margin-left: 8px;
        color: #737360;
        font-size: 14px;
      }
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.3 ease;
      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;
  
        &.liked {
          color: #835afd;
  
          svg path {
            stroke: #835afd;
          }
        }
      }
  
      &:hover {
        filter: brightness(0.7);
      }
    }
`


