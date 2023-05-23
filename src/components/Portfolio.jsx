import * as React from 'react';
//import { Link } from "gatsby"
import styled, { keyframes } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react';

const Wrap = styled.section`
  position: relative;
  padding: 3vw 9vw;
  background-color: #1a1e23;
  @media (orientation: portrait) {
    padding: 6vw 9vw;
  }
`;
const H2 = styled.h2`
  padding-bottom: 1.5vw;
  font-size: 4vw;
  text-align: center;
  color: #fff;
  background-color: #1a1e23;
  @media (orientation: portrait) {
    font-size: 8.5vw;
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  transition: transform 1.5s ease-out;
  transform: translateX(${(props) => props.transform}vw);
  @media (orientation: portrait) {
    width: 100vw;
    margin-left: -9vw;
  }
`;
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 50%;
  height: 43vw;
  @media (orientation: portrait) {
    min-width: 82vw;
    width: 82vw;
    height: unset;
    margin: 0 9vw;
  }
`;
const H3 = styled.h3`
  margin-left: ${(props) => (props.boxNumber > props.slidesSlid + 1 ? 20 : 0)}vw;
  padding: 3vw 0;
  font-size: 3vw;
  text-align: center;
  color: ${(props) => props.color};
  text-shadow: 0 0 3vw ${(props) => props.color};
  transform: translateX(${(props) => (props.slidesSlid > props.boxNumber ? -20 : 0)}vw);
  transition: transform 1.5s ease-out, margin 1.5s ease-out;
  @media (orientation: portrait) {
    margin: 0;
    padding: 9vw 0 6vw;
    font-size: 7.5vw;
    letter-spacing: 0.2vw;
    transform: unset;
  }
`;

const animateBoxBoxTransition = keyframes`
    to { transform: translateY(calc(-100% + 75vw)); }
`;
const BoxBox = styled.div`
  border-radius: 10%;
  overflow: hidden;
  pointer-events: ${(props) => (props.isSliding ? 'none' : 'auto')};
  a {
    cursor: ${(props) => (props.isSliding ? 'default' : 'pointer')};
  }
  @media (orientation: portrait) {
    width: 75vw;
    height: 75vw;
    box-shadow: 0 0 3vw 1.5vw ${(props) => props.color};
    picture > img {
      animation: ${animateBoxBoxTransition} 9s ease-in-out infinite alternate;
    }
  }
  @media (orientation: landscape) {
    width: 33vw;
    height: 33vw;
    margin-left: ${(props) => (props.boxNumber > props.slidesSlid + 1 ? 20 : 0)}vw;
    transform: translateX(${(props) => (props.slidesSlid > props.boxNumber ? -20 : 0)}vw);
    transition: box-shadow 0.3s ease-out, transform 1.5s ease-out, margin 1.5s ease-out;
    &:hover {
      border-color: transparent;
      box-shadow: 0 0 3vw 1.5vw ${(props) => props.color};
      > div .gatsby-image-wrapper {
        background-color: ${(props) => props.color};
      }
      picture > img {
        transition: transform 9s ease-in-out !important;
        transform: translateY(calc(-100% + 33vw));
      }
    }
  }
`;
const ImageParent = styled.div`
  > div {
    height: 33vw;
    transition: background-color 0.3s ease-out;
  }
  picture > img {
    width: 100%;
    height: auto;
    min-height: 33vw;
    transition: transform 9s ease-out !important;
  }
  .gatsby-image-wrapper {
    min-height: 33vw;
  }
  .hedless > picture > img {
    object-position: 27%;
  }
  @media (orientation: portrait) {
    picture > img,
    .gatsby-image-wrapper {
      min-height: 75vw;
    }
  }
`;
const LogoParent = styled.div`
  position: absolute;
  top: 13.5vw;
  right: ${(props) => (props.boxNumber > props.slidesSlid + 1 ? -20 : 0)}vw;
  width: 9vw;
  height: 9vw;
  transform: translate(${(props) => (props.slidesSlid > props.boxNumber ? -20 : 0)}vw, -100%)
    rotate(25deg);
  transition: transform 1.5s ease-out, right 1.5s ease-out;
  z-index: 2;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 5vw;
    left: 2.4vw;
    width: 4.4vw;
    height: 2vw;
    border-radius: 50%;
    background-color: #1a1e23;
  }
  @media (orientation: portrait) {
    top: 31vw;
    right: -4vw;
    width: 18vw;
    height: 18vw;
    margin: 0;
    transform: translateY(-100%) rotate(25deg);
    &:before {
      top: 10vw;
      left: 5vw;
      width: 8.5vw;
      height: 4vw;
    }
  }
`;
const Chevron = styled.div`
  position: absolute;
  top: 63%;
  left: 8vw;
  width: 2vw;
  height: 2vw;
  border-right: 0.6vw solid #fff;
  border-bottom: 0.6vw solid #fff;
  opacity: ${(props) => (props.isActive && !props.isSliding ? '1' : '.5')};
  transform: rotate(135deg);
  transition: border-color 0.3s ease-out, opacity 0.3s ease-out;
  pointer-events: ${(props) => (props.isActive && !props.isSliding ? 'auto' : 'none')};
  cursor: pointer;
  z-index: 2;
  &.right-chevron {
    left: 88vw;
    opacity: ${(props) => (props.slidesSlid + 2 < Boxes.length && !props.isSliding ? '1' : '.5')};
    transform: rotate(-45deg);
    pointer-events: ${(props) =>
      props.slidesSlid + 2 < Boxes.length && !props.isSliding ? 'auto' : 'none'};
  }
  &:hover {
    border-color: #ff0420;
  }
  @media (orientation: portrait) {
    display: block;
    top: 65%;
    left: 4vw;
    width: 6vw;
    height: 6vw;
    border-width: 1.8vw;
    &.right-chevron {
      left: 90vw;
      opacity: ${(props) => (props.slidesSlid + 1 < Boxes.length && !props.isSliding ? '1' : '.5')};
      pointer-events: ${(props) =>
        props.slidesSlid + 1 < Boxes.length && !props.isSliding ? 'auto' : 'none'};
    }
  }
`;
const gemFloat = () => keyframes`
    from { transform: rotate(-15deg); }
    to { transform: rotate(15deg); }
`;
const gemFloat2 = () => keyframes`
    from { transform: rotate(15deg); }
    to { transform: rotate(-15deg); }
`;
const GemContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top}vw;
  left: ${(props) => props.left}vw;
  animation: ${(props) => props.animation} 3s linear infinite alternate;
  z-index: 2;
  > div {
    width: 1.5vw;
    height: 1.5vw;
    padding: 1.5vw;
    filter: brightness(0) invert(1);
    picture > img {
      width: 2vw;
      height: 2vw;
    }
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

const Boxes = [
  {
    heading: 'Mitro',
    image: (
      <StaticImage
        src="../images/mitro-ostroda-strona-internetowa.png"
        placeholder="blurred"
        width={1585}
        height={3515}
        formats={['auto', 'webp']}
        alt="strona internetowa Mitro Ostróda"
        transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
        loading="lazy"
      />
    ),
    link: 'https://mitroinc.pl',
    color: '#b21d1d'
  },
  {
    heading: 'Saniko',
    image: (
      <StaticImage
        src="../images/saniko-strona-internetowa.png"
        placeholder="blurred"
        width={1000}
        height={3470}
        formats={['auto', 'webp']}
        alt="strona internetowa Saniko"
        transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
        loading="lazy"
      />
    ),
    link: 'http://saniko.eu',
    color: '#ff5e14'
  },
  {
    heading: 'Hedless',
    image: (
      <StaticImage
        src="../images/hedless-strona-internetowa.png"
        placeholder="blurred"
        width={1413}
        height={941}
        formats={['auto', 'webp']}
        alt="strona internetowa Hedless"
        transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
        loading="lazy"
        className="hedless"
      />
    ),
    link: 'https://hedless.io',
    color: '#3177e8'
  }
];

const gems = [];

const createGems = () => {
  let top = 6;
  let leftValue = 3;
  let leftValue2 = 4.5;

  for (let i = 0; i < 16; i++) {
    if (i === 8) {
      top = 12;
      leftValue = 94;
      leftValue2 = 92.5;
    } else top += 6;

    if (i % 2 === 0) gems.push({ top, left: leftValue });
    else gems.push({ top, left: leftValue2 });
  }
};
createGems();

let resizeLock = false;
let touchStartScreenX = 0;

const Portfolio = () => {
  const isBrowser = typeof window !== 'undefined';

  const [sliderTransform, setSliderTransform] = useState(0);
  const [slidesSlid, setSlidesSlid] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener('resize', handleResize, false);
    }
  }, [isBrowser]);

  const handleResize = () => {
    if (!resizeLock) {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setSliderTransform(0);
      setSlidesSlid(0);
    }
  };

  useEffect(() => {
    resizeLock = true;
    setTimeout(() => {
      resizeLock = false;
    }, 100);
  }, [dimensions]);

  const changeSlide = (e) => {
    if (isSliding) return;

    let transformDirection;

    if (e.type === 'click') transformDirection = e.target.dataset.chevron === 'right' ? -1 : 1;
    else if (e.type === 'touchstart') return (touchStartScreenX = e.targetTouches[0].screenX);
    else {
      if (touchStartScreenX > e.targetTouches[0].screenX) {
        if (slidesSlid + 2 > Boxes.length) return;
        transformDirection = -1;
      } else {
        if (!slidesSlid) return;
        transformDirection = 1;
      }
    }

    setSlidesSlid(slidesSlid + transformDirection * -1);

    if (dimensions.width < dimensions.height)
      setSliderTransform(sliderTransform + 100 * transformDirection);
    else setSliderTransform(sliderTransform + 40.5 * transformDirection);

    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
    }, 1500);
  };

  return (
    <Wrap>
      <H2>Nasze Realizacje</H2>
      <Chevron
        className="left-chevron"
        onClick={changeSlide}
        isActive={slidesSlid}
        isSliding={isSliding}
      ></Chevron>
      <Container transform={sliderTransform} onTouchStart={changeSlide} onTouchMove={changeSlide}>
        {Boxes.map((project, i) => {
          return (
            <Box key={i}>
              <H3 color={project.color} slidesSlid={slidesSlid} boxNumber={i}>
                {project.heading}
              </H3>
              <BoxBox
                color={project.color}
                slidesSlid={slidesSlid}
                boxNumber={i}
                isSliding={isSliding}
              >
                <ImageParent>
                  <a href={project.link} rel="noreferrer noopener" target="_blank">
                    {project.image}
                  </a>
                </ImageParent>
              </BoxBox>
              <LogoParent slidesSlid={slidesSlid} boxNumber={i}>
                <StaticImage
                  src="../images/logo-magia.svg"
                  placeholder="blurred"
                  formats={['auto', 'webp']}
                  alt="Magia realizacje logo"
                  transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
                  loading="lazy"
                />
              </LogoParent>
            </Box>
          );
        })}
      </Container>
      <Chevron
        className="right-chevron"
        data-chevron="right"
        onClick={changeSlide}
        slidesSlid={slidesSlid}
        isSliding={isSliding}
      ></Chevron>
      {gems.map((gem, i) => {
        return (
          <GemContainer
            top={gem.top}
            left={gem.left}
            animation={(i % 2 === 0 && i < 8) || (i % 2 !== 0 && i > 8) ? gemFloat2 : gemFloat}
            key={i}
          >
            <StaticImage
              src="../images/gem.svg"
              placeholder="blurred"
              formats={['auto', 'webp']}
              alt="magia design"
              transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
              loading="lazy"
              data-gem={i}
            />
          </GemContainer>
        );
      })}
    </Wrap>
  );
};

export default Portfolio;
