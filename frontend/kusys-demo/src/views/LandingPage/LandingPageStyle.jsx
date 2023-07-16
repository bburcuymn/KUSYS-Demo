import styled from 'styled-components';

export const LandingPageStyle = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80);

  .landing-page-content {
    text-align: center;
    color: #000000;
    padding: 20px;
  }

  .card {
    background-color: rgba(189, 189, 189, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;

    h2 {
      margin-bottom: 10px;
    }

    a {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
