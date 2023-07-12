import styled from 'styled-components';

export const LandingPageStyle = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

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
