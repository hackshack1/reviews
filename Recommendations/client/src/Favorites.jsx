import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div` 

`
const Exit = styled.button` 

`
const Container = styled.div` 

`
const Instructions = styled.p` 

`
const Facebook = styled.button` 

`
const Google = styled.button` 

`
const Line1 = styled.hr` 

`
const Or = styled.p` 

`
const Line2 = styled.hr` 

`
const SignUp = styled.button` 

`
const SignInText = styled.p` 

`
const SignIn = styled.button` 

`
const ListingWrapper = styled.div` 

`
const Image = styled.img` 

`
const Title = styled.p` 

`
const Location = styled.p` 

`
const Ratings = styled.div` 

`
const Stars = styled.div` 

`

function Favorites (props){
  return (
    <Wrapper>
      <Exit onClick={()=> props.handlePopup(false)}>X</Exit>
      <Container>
        <Instructions>Save to list</Instructions>
        <Facebook><img></img>Continue with Facebook</Facebook>
        <Google><img></img>Continue with Google</Google>
        <span><Line1></Line1><span><Or>Or</Or></span><Line2></Line2></span>
        <SignUp><img></img>Sign up with Email</SignUp>
        <SignInText> Already have an Airbnb account? </SignInText>
        <SignIn>Sign In</SignIn>
      </Container>
      <ListingWrapper>
        <div>
          <img src="https://s7d4.scene7.com/is/image/roomandboard/wyatt_438274_19e_g?scl=1&size=804,1000&$mobile$" ></img>
        </div>
      </ListingWrapper>
    </Wrapper>
  );
}

export default Favorites;