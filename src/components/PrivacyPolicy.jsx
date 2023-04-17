import * as React from "react"
import styled from 'styled-components'
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import Cookies from 'universal-cookie';

const Wrap = styled.div`
  position: fixed;
  bottom: 4.5vw;
  left: 0;
  justify-content: space-between;
  width: max(38vw, 30rem);
  padding: .75vw;
  border: solid 1px #fff;
  border-left: 0;
  background-color: #d40019;
  z-index: 3;
  @media (orientation: portrait) {
    bottom: 0vw;
    width: 100vw;
    height: 27vw;
    padding: 3vw;
    border-right: 0;
  }
`
const Span = styled.span`
  width: 60%;
  font-size: clamp(.75rem, 1vw, 1rem);
  line-height: clamp(1.125rem, 1.5vw, 1.5rem);
  letter-spacing: .05vw;
  color: #fff;
  @media (orientation: portrait) {
    font-size: 3.5vw;
    line-height: 4.2vw;
  }
`
const ButtonsParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledLink2 = styled.span`
  > a {
    font-weight: 300;
    color: #ff0420;
  }
  @media (orientation: portrait) {
    > a {
      font-size: 3vw;
    }
  }
`
const Button = styled.button`
  width: 100%;
  margin-top: .5rem;
  @media (orientation: portrait) {
    font-size: 3vw;
  }
`

const PrivacyPolicy = () => {
    const cookies = new Cookies();
    const [isPrivacyVisible, setIsPrivacyVisible] = useState(null);

    useEffect(() => setIsPrivacyVisible(cookies.get('privacyPolicy')), []);
    
    const acceptPolicy = () => {
      cookies.set('privacyPolicy', 'accepted');
      setIsPrivacyVisible('accepted');
    } 

    return (
        <Wrap className={`cookies ${isPrivacyVisible}`}>
            <Span>Nasza witryna stosuje pliki cookies. Określenie warunków przechowywania i dostępu do plików cookies jest możliwe w przeglądarce.</Span>
            <ButtonsParent>
                <StyledLink2><Link className='button button4 privacy-button' to='/polityka-prywatnosci'>Dowiedz się więcej</Link></StyledLink2>
                <Button className='button button4 privacy-button' onClick={acceptPolicy}>Akceptuj</Button>
            </ButtonsParent>
        </Wrap>
    )
}

export default PrivacyPolicy
