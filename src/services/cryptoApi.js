import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '02e34ae0d2mshc3e81a917cac5acp13923ajsnf05cdb34ad0f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({
    baseUrl
  }),
  endpoints:(builder)=>({
    getCryptos: builder.query({
      query:(count)=> createRequest(`/coins?limit=${count}`)
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;