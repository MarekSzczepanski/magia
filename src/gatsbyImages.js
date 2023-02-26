import * as React from 'react';
import Image from './components/Image';

export const Logo = () => {
    return (
        <Image
            src='logo-magia.png'
            alt='logo magia'
            className='logo'
        />
    ) 
}

export const Star = () => {
    return (
        <Image
            src='gwiazda.png'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}

export const Stars = () => {
    return (
        <Image
            src='gwiazdy.png'
            alt='gwiazdy - przerywnik oferta'
            className={'stars'}
            style={{
                filter: 'brightness(0) invert(.1)',
            }}
        />
    )
}

export const InfographicImage = (props) => {
    return (
        <Image
            src={props.src}
            alt='strony-internetowe-korzyści'
            className={'infographic-image'}
            style={{
                filter: 'brightness(0) invert(1)',
            }}
        />
    )
}

export const Shield = () => {
    return (
        <Image
            src='opieka-posprzedażowa-strony-internetowe.png'
            alt='opieka posprzedażowa strony internetowe'
            className='shield'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}

export const World = () => {
    return (
        <Image
            src='świat-internetu.png'
            alt='świat internetu'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}

export const Telephone = () => {
    return (
        <Image
            src='telefon-magia.png'
            alt='telefon magia'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}

export const Facebook = () => {
    return (
        <Image
            src='facebook-magia.png'
            alt='facebook magia'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}

export const Youtube = () => {
    return (
        <Image
            src='youtube-magia.png'
            alt='youtube magia'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}
