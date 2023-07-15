import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const HomePage = (props) => {
  const isAdmin = props.location && props.location.state && props.location.state.isAdmin;
  //  console.log(isAdmin);

  return (
    <div>
      <Navbar isAdmin={isAdmin} />
 
      <h1>Home Page</h1>
      {/* Sayfa içeriği */}
    </div>
  );
};

export default HomePage;
