import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .background {
    z-index: 3;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialogue {
    z-index: 4;
    position: absolute;
    height: 350px;
    width: 400px;
    top: 50%;
    left: 50%;
    margin: -175px 0 0 -200px;
    background-color: white;
    border: 1px solid #dedede;
  }

  button {
    padding: 0;
    margin: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    outline: none;
  }
`;

const Text = styled.div`
  font-size: 22px;
  font-weight: 700;
  height: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const Confirmation = props => {
  return (
    <Wrapper>
      <div className="background"></div>
      <div className="dialogue">
        <button
          onClick={() => {
            props.handleReserveClick(false);
          }}
        >
          <svg height="15" width="15">
            <line
              x1="0"
              x2="15"
              y1="0"
              y2="15"
              stroke="black"
              strokeWidth="0.7"
              strokeLinecap="butt"
            ></line>
            <line
              x1="15"
              x2="0"
              y1="0"
              y2="15"
              stroke="black"
              strokeWidth="0.7"
              strokeLinecap="butt"
            ></line>
          </svg>
        </button>
        <Text>
          <p>Reservation Completed!</p>
        </Text>
      </div>
    </Wrapper>
  );
};

export default Confirmation;
