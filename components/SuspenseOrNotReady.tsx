import { useRouter } from "next/router"
import { Suspense } from "react"


type Props = {
  fallback: React.ReactNode,
  children: React.ReactNode
}

const SuspenseOrNotReady:React.FC<Props> = ({fallback, children}) => {

  console.log("rerender")

  const router = useRouter()

  return (
    <Suspense fallback={fallback}>
      {router.isReady ? children : fallback}
    </Suspense>
  )
}

export default SuspenseOrNotReady