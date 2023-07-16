import styled, { keyframes } from 'styled-components';

export const SApp = styled.div`
    text-align: center;
    background: linear-gradient(90deg, rgba(97, 201, 210, 1) 2%, rgba(13, 60, 68, 1) 89%, rgba(9, 53, 61, 1) 100%);
    min-height: 100vh;
    // width: 100%;
`;

export const SHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${spin} infinite 20s linear;
    }
`;

export const SLink = styled.a`
    color: #61dafb;
`;
