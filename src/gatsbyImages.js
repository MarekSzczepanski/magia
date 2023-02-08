import * as React from 'react';
import Image from './components/Image';

export const Wizard = (props) => {
    return (
        <Image
            src='wand.png'
            alt='czarodziej'
            style={{
                width: `${props.width}`
            }}
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
            style={{
                width: `${props.width}`,
                filter: 'brightness(0) invert(.1)',
            }}
        />
    )
}
