import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Loader = styled.div`
  border: 5px solid ${({ theme }) => theme.borderColor};
  border-top: 5px solid ${({ theme }) => theme.accent};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

function Spinner() {
  return (
    <SpinnerWrapper>
      <Loader />
    </SpinnerWrapper>
  );
}

export default Spinner;
