import styled from 'styled-components';

export const LoginPageStyle = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-page-content {
    text-align: center;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  p {
    margin-top: 10px;
  }

  a {
    color: blue;
  }
`;
