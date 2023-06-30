'use client'

import useSWR from 'swr'

import { API_URL } from '../lib/constants'
import { fetcher } from '../lib/helpers'
import { InscriptionResponse, ListResponse } from '../lib/types'
import Ellipsis from './Ellipsis'
import InscriptionCard from './InscriptionCard'
import Loading from './Loading'

const AddressDetails = (params: { aid: string }) => {
  const { data, error, isLoading } = useSWR<ListResponse<InscriptionResponse>>(
    // todo: increase limit to 60
    `${API_URL}/inscriptions?limit=20&address=${params.aid}`,
    fetcher
  )

  if (error) return <span>Something went wrong ʕ•̠͡•ʔ</span>
  if (!params.aid) return <div>404</div>
  if (!data) return <Loading />

  return (
    <div className="pt-10 rounded-lg flex flex-col justify-between items-center px-4">
      <h1 className="w-full sm:w-[auto] flex align-center justify-center text-[26px] font-[700] md:text-[26px]  items-center  text-[#4f4f4f] flex-col sm:flex-row gap-y-[15px]">
        Address{' '}
        <span className="text-[18px] sm:text-[26px] inline-block w-[fit-content] h-[48px] bg-[#f9d560] text-[#454545] flex items-center justify-center ml:0 sm:ml-[38px] px-[54px] w-full">
          <Ellipsis text={params.aid} />
        </span>
      </h1>
      {data.results.length ? (
        <h2 className="self-start font-[700] font-[18px] leading-[23px] text-[#4f4f4f] mt-[22px] sm:mt-[58px] uppercase">
          Inscriptions ({data.total})
        </h2>
      ) : (
        <p className="my-3">No inscriptions currently owned by this address</p>
      )}
      <div className="w-full mt-[27px] grid-cols-2 grid md:grid-cols-5 wrap gap-[22px]">
        {data.results.map((i, index) => (
          <InscriptionCard key={index} inscription={i} />
        ))}
      </div>
    </div>
  )
}

export default AddressDetails
