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

type CarouselItem = {
  id: string,
  img: string,
  label: string
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
  }, items.map(item => item.id))

  return (
    <CarouselWrapper ref={wrapperRef}>
      <CarouselArrow isLeft onClick={next}>{"<"}</CarouselArrow>
      <CarouselSliderOuter>
        <CarouselSliderInner left={left}>
          {memorizedItems}
        </CarouselSliderInner>
      </CarouselSliderOuter>
      <CarouselArrow onClick={prev}>{">"}</CarouselArrow>
    </CarouselWrapper>
  )
}

export default Carousel

const CarouselCard: React.FC<CarouselItem> = ({ img, label }) => {
  return (
    <Card>
      <CardImg src={img} alt={label}></CardImg>
      <CardText>
        {label}
      </CardText>
    </Card>
  )
}

const CarouselWrapper = styled.div`
  padding: 6px;
  position: relative;
  width: 100%;
`

const CarouselSliderOuter = styled.div`
  position: relative;
  overflow-x: hidden;
  contain: content;
  display: flex;
`

type CarouselSliderInnserProps = {
  left: number
}

const CarouselSliderInner = styled.div<CarouselSliderInnserProps>`
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