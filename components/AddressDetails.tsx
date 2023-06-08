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
    <div className="p-4 pt-10 rounded-lg flex flex-col justify-between items-center">
      <h1 className="flex align-center justify-center font-[700] text-[26px] text-[#4f4f4f]">
        Address{' '}
        <span className="inline-block w-[fit-content] h-[48px] bg-[#f9d560] text-[#454545] flex align-center justify-center ml-[38px] px-[54px]">
          <Ellipsis text={params.aid} />
        </span>
      </h1>
      {data.results.length ? (
        <h2 className="self-start font-[700] font-[18px] leading-[23px] text-[#4f4f4f] mt-[58px]">
          Inscriptions ({data.total})
        </h2>
      ) : (
        <p className="my-3">No inscriptions currently owned by this address</p>
      )}
      <div className="w-full mt-[27px] grid md:grid-cols-5 wrap gap-[22px]">
        {data.results.map((i, index) => (
          <InscriptionCard key={index} inscription={i} />
        ))}
      </div>
    </div>
  )
}

export default AddressDetails
