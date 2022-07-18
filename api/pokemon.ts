import useSWR from 'swr'
import fetcher from "@/utils/fetcher"
import { PokeAPI } from "pokeapi-types";

const DEFAULT_PAGE_SIZE = 10

export const usePokemons = (page:number) => {
  const param = new URLSearchParams({
    offset: `${(page - 1) * DEFAULT_PAGE_SIZE}`,
    limit: `${DEFAULT_PAGE_SIZE}`
  })
  try {
    const {data} = useSWR<PokeAPI.NamedAPIResourceList>("https://pokeapi.co/api/v2/pokemon?" + param.toString(), fetcher, { suspense: true })

    return {
      results: data!.results,
      count: data!.count,
      pageSize: DEFAULT_PAGE_SIZE
    }
  } catch (e) {
    console.log(e)
    throw e
  }

}

export const usePokemonByName = (name:string) => {

  const { data } = useSWR<PokeAPI.Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher, { suspense: true })

  return data!
}
