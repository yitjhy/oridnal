'use client'

import useSWR from 'swr'
import styled from 'styled-components'
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

  // todo: add pagination to allow viewing all inscriptions? or link to explore page
  return (
    <div className="px-4 py-12 rounded-lg flex flex-col justify-between items-center">
      <SatTitle>Sat {params.sid}</SatTitle>

      {data.inscription_id && (
        <div className="flex flex-col items-center">
          <Insc className="uppercase">Inscription</Insc>
          <Inscription id={data.inscription_id} />
        </div>
      )}

      <table className="text-sm border-collapse" style={{ marginTop: '20px' }}>
        <tbody>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Sat Rarity
            </TitleTd>
            <ValueTd className="uppercase md:py-2 break-all">
              <Tag>{data.rarity}</Tag>
            </ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">Name</TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.name}</ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Coinbase Height
            </TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.coinbase_height}</ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Decimal
            </TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.decimal}</ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Degree
            </TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.degree}</ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Percentile
            </TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.percentile}</ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Cycle
            </TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.cycle}</ValueTd>
          </tr>
          <tr className="flex flex-col md:table-row py-4 space-y-0.5">
            <TitleTd className="uppercase md:py-3 px-2 pr-20 whitespace-nowrap underline md:no-underline">
              Offset
            </TitleTd>
            <ValueTd className="md:py-2 px-2 break-all">{data.offset}</ValueTd>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SatDetails

const SatTitle = styled.h1`
  font-size: 26px;
  color: #4f4f4f;
  line-height: 33px;
  font-style: normal;
  font-weight: 700;
`

const Insc = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 700;
  color: #4f4f4f;
`

const TitleTd = styled.td`
  color: #9f9f9f;
  font-size: 18px;
`

const ValueTd = styled.td`
  font-size: 18px;
  color: #4f4f4f;
`

const Tag = styled.div`
  background: #f5bc00;
  padding: 3px 18px;
  width: fit-content;
  color: #4f4f4f;
  font-size: 18px;
`
