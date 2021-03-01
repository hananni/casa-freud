import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

const GoToTopCircle = styled.div`
  position: fixed;
  bottom: 20px;
  align-items: center;
  height: 20px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  right: 50px;
  border: 5px solid #0c1536;
  border-radius: 50px;
  padding: 10px 3px;
  background-color: #0c1536;

  svg {
    fill: white;
  }
`;

const GoToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <GoToTopCircle onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>
      <ArrowUpwardSharpIcon />
    </GoToTopCircle>
  );
};

export default GoToTop;
