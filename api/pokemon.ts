import useSWR from 'swr'
import fetcher from "@/utils/fetcher"
import { PokeAPI } from "pokeapi-types";
import { useState } from 'react';

const DEFAULT_KEY = "https://pokeapi.co/api/v2/pokemon?limit=10"

export const usePokemons = () => {
  const [url, setUrl] = useState(DEFAULT_KEY)
  const {data} = useSWR<PokeAPI.NamedAPIResourceList>(url, fetcher, { suspense: true })

  return {
    results: data?.results,
    count: data?.count,
    nextPage: () => {
      data?.next && setUrl(data?.next)
    },
    prevPage: () => {
      data?.previous && setUrl(data?.previous)
    }
  }
}

export const usePokemonByName = (name:string) => {

  const { data } = useSWR<PokeAPI.Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher, { suspense: true })

  return data!
}