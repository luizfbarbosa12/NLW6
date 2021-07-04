import styled from 'styled-components'


export const PageRoom = styled.div`
    header {
    padding: 2.4rem;
    border-bottom: .1rem solid #e2e2e2;

    .content {
      max-width: 112rem;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      display: flex;

      > img {
        max-height: 4.5rem;
      }

      > div {
        display: flex;
        gap: 1.6rem;

        button {
          height: 4rem;
        }
      }
    }
  }

  main {
    max-width: 80rem;
    margin: 0 auto;

    .room-title {
      margin: 3.2rem 0 2.4rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        color: #29292e;
      }

      span {
        margin-left: 1.6rem;
        background-color: #e559f9;
        border-radius: 999.9rem;
        padding: .8rem 1.6rem;
        color: #fff;
        font-weight: 500;
        font-size: 1.4rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1.6rem;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 .2rem 1.2rem rgba(0, 0, 0, 0.4);
        resize: vertical;
        min-height: 13rem;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.6rem;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
          }

          > span {
            margin-left: .8rem;
            color: #29292e;
            font-weight: 500;
            font-size: 1.4rem;
          }
        }
        span {
          font-size: 1.4rem;
          color: #737388;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 1.4rem;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 3.2rem;
    }
  }
`