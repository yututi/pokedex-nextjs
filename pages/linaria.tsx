import type { NextPage } from 'next'
import Carousel from "@/components/linaria/Carousel"

const repeat = (count:number) => [...new Array(count).keys()]

const Linaria: NextPage = () => {

  const items = repeat(20).map(num => ({
    id: `carousel-${num}`,
    label: `label-${num}`,
    img: "https://picsum.photos/200/300"
  }))

  return (
    <Carousel items={items}/>
  )
}

export default Linaria
