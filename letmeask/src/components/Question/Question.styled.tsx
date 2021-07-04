import styled from 'styled-components'
import { theme } from '../../styles/Theme/theme'
import {QuestionProps} from './Question'


export const QuestionArea = styled.div<Partial<QuestionProps>>`
    background-color: ${theme.darkBackground};
    border-radius: .8rem;
    box-shadow: 0 .2rem 1.2rem rgba(0, 0, 0, 0.5);
    padding: 2.4rem;
    margin-top: ${(props) => props.question ? '.8rem' : '0'};
    color: ${(props) => props.isHighlighted ? '#f4f0ff' : '#dadada'};

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.3 ease;
      
      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: .8rem;
  
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
export const Content = styled.p`
  color: #dadada;
    
`

export const Footer = styled.footer`     
    display: flex;
    justify-content: space-between;      
    align-items: center;
    margin-top: 2.4rem;
  
    > div {
    display: flex;
    gap: 1.6rem;
    }
`
export const UserInfo = styled.div`
      display: flex;
      align-items: center;
  
      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
      }
  
      > span {
        margin-left: .8rem;
        color: #737360;
        font-size: 1.4rem;
      }
`
