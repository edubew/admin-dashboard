import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => (
  <Div>
    <Sidebar />
    <Navbar />
  </Div>
);

const Div = styled.div`
 display: grid;
 grid-template-columns: 1fr 12fr 4fr;
 min-height: 100vh;
 height: max-content;

 @media screen and (min-width: 280px) and (max-width: 1088px) {
  grid-template-columns: 1fr;
  height: max-content;
 }
`;

export default App;
