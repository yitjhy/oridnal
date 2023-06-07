'use client'

import Link from 'next/link'
import useSWR from 'swr'

import { API_URL } from '../lib/constants'
import { fetcher } from '../lib/helpers'
import Loading from './Loading'
import { InscriptionResponse } from '../lib/types'
import TransferHistory from './TransferHistory'
import styled from 'styled-components'

const InscriptionDetails = (params: { iid: string }) => {
  const { data, error, isLoading } = useSWR<
    | InscriptionResponse
    | {
        // todo: add more generic api error response type
        error: string
        message: string
        statusCode: number
      }
  >(`${API_URL}/inscriptions/${params.iid}`, fetcher)

  if (!params.iid) return <div>404</div>

  if (error) return <span>Something went wrong ʕ•̠͡•ʔ</span>
  if (!data) return <Loading />
  if ('error' in data)
    return (
      <span>
        Something went wrong ʕ•̠͡•ʔ
        <br />
        {data.error}: {data.message}
      </span>
    )

  const wasTransferred = data.timestamp !== data.genesis_timestamp

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div>
          <div className="lg:rounded-md">
            <iframe
              className="max-w-[65%] mb-16 md:mb-0 md:max-w-full lg:max-w-none w-full aspect-square rounded-md overflow-hidden mx-auto"
              sandbox="allow-scripts"
              loading="lazy"
              src={`/preview/${params.iid}`}
            />
          </div>
        </div>

        <div className="flex-grow">
          <InscriptionName>Inscription #{data.number}</InscriptionName>
          <table style={{ marginTop: '37px' }} className="w-full text-sm uppercase border-collapse">
            <tbody>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Type</TitleTd>
                <ValueTd className="md:py-2 break-all flex items-center space-x-2">{data.content_type}</ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5  ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Content Length</TitleTd>
                <ValueTd className="md:py-2 break-all">{data.content_length}</ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Sat</TitleTd>
                <ValueTd className="md:py-2 break-all">
                  <Link href={`/sat/${data.sat_ordinal}`} className="underline">
                    {data.sat_ordinal}
                  </Link>
                </ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Sat Rarity</TitleTd>
                <ValueTd className="md:py-2 break-all">
                  <Tag>{data.sat_rarity}</Tag>
                </ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">ID</TitleTd>
                <ValueTd className="md:py-2 break-all">{data.id}</ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">
                  Owned By
                  {/* todo: add help tooltip to explain what an address is and how utxo ownership works */}
                </TitleTd>
                <ValueTd className="md:py-2 break-all">
                  <Link href={`/address/${data.address}`} className="underline">
                    {data.address}
                  </Link>
                </ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">
                  Inscribed By
                  {/* todo: add help tooltip to explain what an address is and how utxo ownership works */}
                </TitleTd>
                <ValueTd className="md:py-2 break-all">
                  <Link href={`/address/${data.genesis_address}`} className="underline">
                    {data.genesis_address}
                  </Link>
                </ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Inscription TxId</TitleTd>
                <ValueTd className="md:py-2 break-all underline">
                  <Link href={`https://mempool.space/tx/${data.genesis_tx_id}`} target="_blank">
                    {data.genesis_tx_id} ↗
                  </Link>
                </ValueTd>
              </tr>
              {/* todo: add Inscription Date */}
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Inscription Date</TitleTd>
                <ValueTd className="md:py-2 break-all">
                  {new Intl.DateTimeFormat('default', {
                    dateStyle: 'long',
                    timeStyle: 'medium',
                  }).format(new Date(data.genesis_timestamp))}
                </ValueTd>
              </tr>
              {wasTransferred && (
                <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                  <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">
                    Last Transfer Date
                  </TitleTd>
                  <ValueTd className="md:py-2 break-all">
                    {new Intl.DateTimeFormat('default', {
                      dateStyle: 'long',
                      timeStyle: 'medium',
                    }).format(new Date(data.timestamp))}
                  </ValueTd>
                </tr>
              )}
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">
                  Inscription Height
                </TitleTd>
                <ValueTd className="md:py-2 break-all">
                  <Link href={`/block/${data.genesis_block_height}`} className="underline">
                    {data.genesis_block_height}
                  </Link>
                </ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Inscription Fee</TitleTd>
                <ValueTd className="md:py-2 break-all">{data.genesis_fee}</ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Output</TitleTd>
                <ValueTd className="md:py-2 break-all">{data.output}</ValueTd>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5">
                <TitleTd className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline">Offset</TitleTd>
                <ValueTd className="md:py-2 break-all">{data.offset}</ValueTd>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {wasTransferred && (
        <div className="mt-10">
          <TransferHistory inscription={data} />
        </div>
      )}
    </>
  )
}

export default InscriptionDetails

const InscriptionName = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 33px;
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
