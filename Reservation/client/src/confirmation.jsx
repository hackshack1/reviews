import React, { useEffect } from 'react';
const styled = window.styled;

const Wrapper = styled.div`
  button {
    background: none;
  }

  .background {
    z-index: 3;
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialogue {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 4;
    position: fixed;
    height: 400px;
    width: 500px;
    padding: 30px;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -250px;
    background-color: white;
    border: 1px solid #dedede;
  }

  button {
    padding: 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    outline: none;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  width: 100%;

  .signup {
    font-size: 24px;
    font-weight: 700;
    height: 30px;
  }

  .booking {
    font-size: 16px;
    font-weight: 600;
    height: 25px;
  }

  div {
    width: 100%;
    padding-top: 15px;
    border-top: 1px solid #dedede;
  }

  span {
    display: inline-block;
  }

  .account {
    font-size: 16px;
    font-weight: 300;
    height: 20px;
    margin-right: 5px;
  }

  .login {
    font-weight: 400;
    outline: none;
    color: #007e82;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Social = styled.div`
  align-self: center;
  width: 100%;

  :hover {
    cursor: pointer;
  }

  div {
    border: solid;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }

  .fb {
    background-color: #4568b2;
    color: white;
  }

  .google {
    backgound-color: white;
    color: black;
    border: 2px solid black;
  }

  .email {
    background-color: #f25764;
    color: white;
  }
`;

const Division = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  :before {
    bottom: 50%;
    width: 230px;
    position: relative;
    border-bottom: 1px solid #dedede;
    content: '';
  }

  :after {
    bottom: 50%;
    width: 230px;
    position: relative;
    border-bottom: 1px solid #dedede;
    content: '';
  }
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
          <p className="signup">Sign up to book</p>
        </Text>
        <Text>
          <p className="booking">You're moments away from booking your stay.</p>
        </Text>
        <Social>
          <div className="fb">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '18px',
                width: '18px',
                display: 'block',
                fill: 'currentcolor'
              }}
            >
              <path
                d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                fillRule="evenodd"
              ></path>
            </svg>
            <span>Continue with Facebook</span>
          </div>
          <div className="google">
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{ height: '18px', width: '18px', display: 'block' }}
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                  fill="#34A853"
                ></path>
                <path d="M0 0h18v18H0V0z"></path>
              </g>
            </svg>
            <span>Continue with Google</span>
          </div>
        </Social>
        <Division>
          <span>or</span>
        </Division>
        <Social>
          <div className="email">
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '18px',
                width: '18px',
                display: 'block',
                fill: 'currentcolor'
              }}
            >
              <path
                d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span>Sign up with Email</span>
          </div>
        </Social>
        <Text>
          <div>
            <span className="account">Already have an Airbnb account?</span>
            <span className="login">Log in</span>
          </div>
        </Text>
      </div>
    </Wrapper>
  );
};

export default Confirmation;
