import * as React from 'react';
import Image from './components/Image';

export const Logo = () => {
    return (
        <Image
            src='logo-red.png'
            alt='magia internetu'
            className='logo'
        />
    ) 
}

export const Star = (props) => {
    return (
        <Image
            src='sparkle.png'
            alt='gwiazdy'
            style={{
                filter: 'brightness(0) invert(1)'
            }}
        />
    )
}

export const Stars = (props) => {
    return (
        <Image
            src='stars.png'
            alt='gwiazdy'
            class={props => props.class}
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
            alt='wizerunek w internecie'
            style={{
                width: '9vw',
                height: '9vw',
                filter: 'brightness(0) invert(1)',
            }}
        />
    )
}

export const Shield = () => {
    return (
        <Image
            src='shield.png'
            alt='bezpieczeństwo'
            style={{
                width: '15vw',
                height: '15vw',
                filter: 'brightness(0) invert(1)',
            }}
        />
    )
}
