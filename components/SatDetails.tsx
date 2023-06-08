'use client'

import useSWR from 'swr'
import { API_URL } from '../lib/constants'
import { fetcher } from '../lib/helpers'
import { SatResponse } from '../lib/types'
import InscriptionCard from './InscriptionCard'
import Loading from './Loading'
import WithInscription from './WithInscription'

const Inscription = ({ id }: { id: string }) => WithInscription(id, InscriptionCard)

const SatDetails = (params: { sid: string }) => {
  const { data, error, isLoading } = useSWR<SatResponse>(`${API_URL}/sats/${params.sid}`, fetcher)

  if (error) return <span>Something went wrong ʕ•̠͡•ʔ</span>
  if (!params.sid) return <div>404</div>
  if (!data) return <Loading />

  return (
    <div className="px-4 py-12 rounded-lg flex flex-col justify-between items-center">
      <h1 className="text-[#4f4f4f] text-[26px] leading-[33px] font-[700]">Sat {params.sid}</h1>
      {data.inscription_id && (
        <div className="flex flex-col items-center">
          <p className="uppercase text-[18px] mt-[32px] mb-[24px] font-[700] text-[#4f4f4f]">Inscription</p>
          <Inscription id={data.inscription_id} />
        </div>
      )}

      <table className="text-sm border-collapse" style={{ marginTop: '20px' }}>
        <tbody>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Sat Rarity
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">
              <div className="inline-block bg-[#f5bc00] px-[18px] py-[3px] text-[#4f4f4f] text-[18px]">{data.rarity}</div>
            </td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Name
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.name}</td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Coinbase Height
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.coinbase_height}</td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Decimal
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.decimal}</td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Degree
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.degree}</td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Percentile
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.percentile}</td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Cycle
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.cycle}</td>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <td className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
              Offset
            </td>
            <td className="uppercase md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.offset}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SatDetails
