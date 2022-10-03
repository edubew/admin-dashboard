import styled from 'styled-components';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { BiGroup, BiBell } from 'react-icons/bi';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { SiAnalogue } from 'react-icons/si';
import { FiHelpCircle } from 'react-icons/fi';

import React from 'react';

const Sidebar = () => (
  <Aside id="sidebar">
    <div className="brand">
      <RiNeteaseCloudMusicLine />
    </div>
    <ul className="links">
      <li className="selected">
        <SiAnalogue />
      </li>
      <li><HiOutlineMusicNote /></li>
      <li><BiBell /></li>
      <li><AiOutlineDollarCircle /></li>
      <li><BiGroup /></li>
    </ul>
    <div className="help">
      <FiHelpCircle />
    </div>
  </Aside>
);

const Aside = styled.section`
background-color: var(--dark-background-color);
height: 100%;
width: max-content;
padding: 2rem;
display: flex;
flex-direction: column;
`;

export default Sidebar;
