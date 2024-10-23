import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #1d1d47, #000);
    color: white;
    height: 100vh;
    overflow: hidden;
  }

  .reactflow-wrapper {
    background-color: #000;
    background-image: radial-gradient(#333 1px, transparent 1px), radial-gradient(#333 1px, transparent 1px);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
  }

  h4 {
    font-size: 14px;
    color: white;
  }

  .node:hover {
    box-shadow: 0 0 25px rgba(108, 12, 191, 1);
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  
  .react-flow__handle {
    width: 12px;
    height: 12px;
    background: #6c0cbf;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(108, 12, 191, 0.5);
  }

  .toolbar {
    background-color: #333;
    padding: 10px;
    border-radius: 8px;
  }

  .toolbar button {
    background-color: #6c0cbf;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-right: 5px;
    box-shadow: 0 0 10px rgba(108, 12, 191, 0.5);
    cursor: pointer;
  }

  .toolbar button:hover {
    background-color: #4800a3;
    box-shadow: 0 0 15px rgba(108, 12, 191, 1);
  }
`;


