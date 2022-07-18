const fetcher = (input: RequestInfo,init:RequestInit) => fetch(input, init).then(res => res.json())
  // .then(res => {
  //   return new Promise<any>(resolve => {
  //     setTimeout(() => resolve(res), 3000)
  //   })
  // })

export default fetcher