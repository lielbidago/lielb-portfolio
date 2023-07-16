
import { CSSProperties, ReactComponentElement } from 'react';
import styles from './ImageContainer.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ImageContainerProps{
    image:StaticImageData,
    altText:string,
    ImageStyle?:CSSProperties,
    isPrioity?:boolean
    contStyle?:CSSProperties
}


export default function ImageContainer({image, altText, ImageStyle,contStyle, isPrioity=false}:ImageContainerProps){
    let imgStyle=ImageStyle?ImageStyle:{};
    let coStyle=contStyle?contStyle:{};
    let imageProps = {};
    isPrioity?imageProps = {priority:true}:{loading:'lazy'};

    return (
        <div className={styles.imageContainer} key={altText} style={coStyle}>
            <Image src={image.src}
                alt={altText}
                placeholder="blur" 
                blurDataURL={image.src}
                style={imgStyle}
                {...imageProps}
                sizes='(max-width: 768px) 100vw, 100%'
                fill/>
        </div>
    )
}