import useSWR from 'swr'
import fetcher from "@/utils/fetcher"
import { PokeAPI } from "pokeapi-types";

const DEFAULT_PAGE_SIZE = 10

type Fetching = {
  loading: true
}

type Result = {
  loading: false,
  results: PokeAPI.NamedAPIResource[],
  count: number,
  pageSize: number
}

export const usePokemons = (page:number) : Fetching | Result => {
  const param = new URLSearchParams({
    offset: `${(page - 1) * DEFAULT_PAGE_SIZE}`,
    limit: `${DEFAULT_PAGE_SIZE}`
  })
  const {data} = useSWR<PokeAPI.NamedAPIResourceList>("https://pokeapi.co/api/v2/pokemon?" + param.toString(), fetcher)

  if (data) {
    return {
      loading: false,
      results: data!.results,
      count: data!.count,
      pageSize: DEFAULT_PAGE_SIZE
    }
  }

  return {
    loading: true
  }
}

export const usePokemonByName = (name:string) => {

  const { data } = useSWR<PokeAPI.Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher, { suspense: true })

  return data!
}
