import { styled } from "linaria/react"
import {
  defaultShadow
} from "./constants"
import {
  Card,
  CardImg,
  CardText
} from "./Card"
import React, { useRef, useState } from "react"
import { useMemo } from "react"

export const CarouselWrapper = styled.div`
  padding: 6px;
  position: relative;
  width: 100%;
`

const CarouselSliderOuter = styled.div`
  position: relative;
  overflow-x: hidden;
  contain: contain;
  display: flex;
`

type CarouselInnserProps = {
  left: number
}

const CarouselInner = styled.div<CarouselInnserProps>`
  transform: translateX(${props => props.left}px);
  transition: transform 0.5s;
  height: 100%;
  display: flex;
  position: relative;
  white-space: nowrap;
`

type CarouselArrowProps = {
  isLeft?: boolean
}

export const CarouselArrow = styled.div<CarouselArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 12px 12px;
  font-size: 32px;
  cursor: pointer;
  z-index: 1;
  box-shadow: ${defaultShadow};
  left: ${props => props.isLeft ? "0px" : "initial"};
  right: ${props => !props.isLeft ? "0px" : "initial"};
  background-color: white;
`

type CarouselItem = {
  id: string,
  img: string,
  label: string
}

const CARD_SIZE = {
  H:"200px",
  W:"150px"
} as const

const CarouselCard: React.FC<CarouselItem> = ({ img, label }) => {

  return (
    <Card>
      <CardImg 
        src={img} 
        alt={label}
        height={CARD_SIZE.H}
        width={CARD_SIZE.W}
      />
      <CardText>
        {label}
      </CardText>
    </Card>
  )
}

type CarouselProps = {
  items: CarouselItem[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {

  const [left, setLeft] = useState(0)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const next = () => {
    const width = wrapperRef.current!.clientWidth
    setLeft(left + width)
  }
  const prev = () => {
    const width = wrapperRef.current!.clientWidth
    setLeft(left - width)
  }

  const memorizedItems = useMemo(() => {
    return (
      <>
        {items.map(item => (
          <CarouselCard key={item.id} {...item}/>
        ))}
      </>
    )
  }, [items])

  return (
    <CarouselWrapper ref={wrapperRef}>
      <CarouselArrow isLeft onClick={next}>{"<"}</CarouselArrow>
      <CarouselSliderOuter>
        <CarouselInner left={left}>
          {memorizedItems}
        </CarouselInner>
      </CarouselSliderOuter>
      <CarouselArrow onClick={prev}>{">"}</CarouselArrow>
    </CarouselWrapper>
  )
}

export default Carousel