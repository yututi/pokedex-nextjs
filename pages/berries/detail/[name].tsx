import { useRouter } from 'next/router'

import BerryDetail, {Loading} from "@/components/BerryDetail"
import SuspenseOrNotReady from '@/components/SuspenseOrNotReady'
import Container from '@mui/material/Container'

const Detail: React.FC = () => {

  const router = useRouter()

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <SuspenseOrNotReady fallback={<Loading/>}>
        <BerryDetail name={router.query.name as string} />
      </SuspenseOrNotReady>
    </Container>
  )
}

export default Detail
