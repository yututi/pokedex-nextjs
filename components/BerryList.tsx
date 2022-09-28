import { useBerries } from "@/api/berries"
import { useRouter } from "next/router"
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import ItemList from "./ItemList"
import { useRef } from "react";

const BerryList: React.FC = () => {

  const router = useRouter()

  const max = useRef<number>(10)

  const page = Number(router.query.page) || 1

  const berriesResult = useBerries(page)

  if (berriesResult.loading) {
    return (
      <Stack alignItems={"center"}>
        <Pagination count={max.current} page={page} onChange={(e, newPage) => router.push({pathname: `/berries/${newPage}`})}></Pagination>
        <ItemList isLoading={berriesResult.loading} itemList={[]} itemPath="berries/detail"></ItemList>
      </Stack>
    )
  }

  const {
    results,
    count,
    pageSize
  } = berriesResult

  max.current = Math.ceil(count / pageSize)

  return (
    <Stack alignItems={"center"}>
      <Pagination count={max.current} page={page} onChange={(e, newPage) => router.push({pathname: `/berries/${newPage}`})}></Pagination>
      <ItemList isLoading={false} itemList={results} itemPath="berries/detail"></ItemList>
    </Stack>
  )
}

export default BerryList