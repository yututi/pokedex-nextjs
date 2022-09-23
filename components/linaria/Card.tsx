import { styled } from "linaria/react"
import React, { useState } from "react"

export const Card = styled.div`
  padding: 6px;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`

type ImageProps = {
  width: string,
  height: string,
  src: string,
  alt: string
}

export const _CardImg = styled.img<ImageProps>`
  width: ${prop => prop.width};
  height: ${prop => prop.height};
  object-fit: cover;
  background-color: gainsboro;
`

export const CardImg:React.FC<ImageProps> = (props) => {

  const [loaded, setLoaded] = useState(false)

  const onLoad = (e:any) => {
    setLoaded(true)
  }

  return (
    <>
      <_CardImg {...props} onLoad={onLoad} loading="lazy"></_CardImg>
      {/* {!loaded && <EmptyCardImg {...props}/>} */}
    </>
  )
}

export const EmptyCardImg = styled.div<ImageProps>`
  background-color: rgba(0,0,0,.12);
  width: ${prop => prop.width};
  height: ${prop => prop.height};
  position: absolute;
  overflow: hidden;
  &::after {
    background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0));
    animation: slideIn 1.5s infinite;
    content: "";
    position: absolute;
    inset: 0px;
  }
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }
`

export const CardText = styled.div`
  padding: 6px;
`
