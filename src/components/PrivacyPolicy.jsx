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
  width: 42vw;
  height: 6vw;
  padding: .75vw;
  border: solid 1px #fff;
  border-left: 0;
  background-color: #ff0420;
  z-index: 3;
  @media (orientation: portrait) {
    bottom: 0vw;
    width: 100vw;
    height: 27vw;
    padding: 1.5vw;
    border-right: 0;
  }
`
const Span = styled.span`
  width: 60%;
  font-size: 1vw;
  line-height: 1.5vw;
  letter-spacing: .05vw;
  color: #fff;
  @media (orientation: portrait) {
    font-size: 3.5vw;
    line-height: 4.5vw;
  }
`
const ButtonsParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledLink2 = styled.span`
  height: 2vw !important; 
  > a {
    font-size: .9vw;
    font-weight: 300;
    color: #ff0420;
  }
  @media (orientation: portrait) {
    height: 10vw !important; 
    > a {
      font-size: 3vw;
    }
  }
`
const Button = styled.button`
  width: 100%;
  height: 2vw !important;
  font-size: .9vw;
  @media (orientation: portrait) {
    height: 10vw !important; 
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
                <StyledLink2 className='button button4'><Link to='/polityka-prywatnosci'>Dowiedz się więcej</Link></StyledLink2>
                <Button className='button button4' onClick={acceptPolicy}>Akceptuj</Button>
            </ButtonsParent>
        </Wrap>
    )
}

export default PrivacyPolicy
