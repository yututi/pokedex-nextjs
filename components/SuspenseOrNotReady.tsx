import { useRouter } from "next/router"
import { Suspense } from "react"


type Props = {
  fallback: React.ReactNode,
  children: React.ReactNode
}

const SuspenseOrNotReady:React.FC<Props> = ({fallback, children}) => {

  const router = useRouter()

  if (router.isReady) {
    return (
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    )
  }

  return (<>{fallback}</>)
}

export default SuspenseOrNotReady