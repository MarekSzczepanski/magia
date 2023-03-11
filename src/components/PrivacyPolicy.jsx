import * as React from "react"
import styled from 'styled-components'
import { useState } from "react"
import { Link } from "gatsby"
import Cookies from 'universal-cookie';

const Wrap = styled.div`
  position: fixed;
  bottom: 4.5vw;
  left: 0;
  display: ${props => props.isPrivacyVisible ? 'flex' : 'none'};
  justify-content: space-between;
  width: 42vw;
  height: 6vw;
  padding: .75vw;
  border: solid 1px #fff;
  border-left: 0;
  background-color: #ff0420;
  z-index: 3;
`
const Span = styled.span`
  width: 60%;
  font-size: 1vw;
  line-height: 1.5vw;
  letter-spacing: .05vw;
  color: #fff;
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
`
const Button = styled.button`
  width: 100%;
  height: 2vw !important;
  font-size: .9vw;
`

const PrivacyPolicy = () => {
    const cookies = new Cookies();
    const [isPrivacyVisible, setIsPrivacyVisible] = useState(!cookies.get('privacyPolicy'));

    const acceptPolicy = () => {
        setIsPrivacyVisible(false);
        cookies.set('privacyPolicy', 'accepted');
    } 
    return (
        <Wrap isPrivacyVisible={isPrivacyVisible}>
            <Span>Nasza witryna stosuje pliki cookies. Określenie warunków przechowywania i dostępu do plików cookies jest możliwe w przeglądarce.</Span>
            <ButtonsParent>
                <StyledLink2 className='button button4'><Link to='/polityka-prywatnosci'>Dowiedz się więcej</Link></StyledLink2>
                <Button className='button button4' onClick={acceptPolicy}>Akceptuj</Button>
            </ButtonsParent>
        </Wrap>
    )
}

export default PrivacyPolicy
