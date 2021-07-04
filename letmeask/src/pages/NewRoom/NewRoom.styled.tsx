import styled from 'styled-components'


export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 2.4rem;
      margin: 6.4rem 0 2.4rem;
      font-family: "Poppins", sans-serif;
    }
    form {
      input {
        height: 5rem;
        border-radius: .8rem;
        padding: 0 1.6rem;
        background: #fff;
        border: .1rem solid #a8a8b3;
      }

      button {
        margin-top: 1.6rem;
      }

      button,
      input {
        width: 100%;
      }
    }
    p {
      font-size: 1.4rem;
      color: #737380;
      margin-top: 1.6rem;

      a {
        color: #e559f9;
      }
    }
`

export const PageAuthNewRoom = styled.div`
    display: flex;
  align-items: stretch;
  height: 100vh;
  
`