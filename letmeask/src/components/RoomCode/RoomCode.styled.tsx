import styled from 'styled-components'
import { theme } from '../../styles/Theme/theme'

export const CopyButton = styled.button`
    height: 4rem;
    border-radius: .8rem;
    overflow: hidden;
    background: ${theme.darkBackground};
    color: ${theme.darkFont};
    border: .1rem solid #835afd;
    cursor: pointer;
    display: flex;
`

export const Container = styled.div`
      background: #835afd;
      padding: 0 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
`

export const Code = styled.span`
      display: block;
      align-self: center;
      flex: 1;
      padding: 0 1.6rem 0 1.2rem;
      width: 23rem;
      font-size: 1.4rem;
      font-weight: 500;
`
  
  