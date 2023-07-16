import styled from 'styled-components';

export const LoginPageStyle = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80);

  .login-page-content {
    text-align: center;
    padding: 30px;
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 20px;
    background-color: #3cbf98;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top:10px
  }

  p {
    margin-top: 10px;
  }

  a {
    color: blue;
    text-decoration: none;
  }
`;
