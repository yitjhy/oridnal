'use client'

import Link from 'next/link'
import useSWR from 'swr'

import { API_URL } from '../lib/constants'
import { fetcher } from '../lib/helpers'
import Loading from './Loading'
import { InscriptionResponse } from '../lib/types'
import TransferHistory from './TransferHistory'

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
      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className='md:w-[45%]'>
          <div className="lg:rounded-md">
            <iframe
              className="md:mt-4 max-w-[65%] mb-16 md:mb-0 md:max-w-full lg:max-w-none w-full aspect-square overflow-hidden mx-auto"
              sandbox="allow-scripts"
              loading="lazy"
              src={`/preview/${params.iid}`}
            />
          </div>
        </div>

        <div className="flex-grow">
          <h2 className='text-[26px] leading-[33px] font-[700] text-[#4f4f4f]'>Inscription #{data.number}</h2>
          <table style={{ marginTop: '37px' }} className="w-full text-sm uppercase border-collapse">
            <tbody>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Type</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.content_type}</td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5  ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Content Length</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.content_length}</td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Sat</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                  <Link href={`/sat/${data.sat_ordinal}`} className="underline">
                    {data.sat_ordinal}
                  </Link>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Sat Rarity</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                  
                <div className="inline-block bg-[#f5bc00] px-[18px] py-[3px] text-[#4f4f4f] text-[18px]">{data.sat_rarity}</div>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">ID</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.id}</td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
                  Owned By
                  {/* todo: add help tooltip to explain what an address is and how utxo ownership works */}
                </td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                  <Link href={`/address/${data.address}`} className="underline">
                    {data.address}
                  </Link>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
                  Inscribed By
                  {/* todo: add help tooltip to explain what an address is and how utxo ownership works */}
                </td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                  <Link href={`/address/${data.genesis_address}`} className="underline">
                    {data.genesis_address}
                  </Link>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Inscription TxId</td>
                <td className="md:py-2 break-all underline text-[#9f9f9f] text-[18px]">
                  <Link href={`https://mempool.space/tx/${data.genesis_tx_id}`} target="_blank">
                    {data.genesis_tx_id} ↗
                  </Link>
                </td>
              </tr>
              {/* todo: add Inscription Date */}
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Inscription Date</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                  {new Intl.DateTimeFormat('default', {
                    dateStyle: 'long',
                    timeStyle: 'medium',
                  }).format(new Date(data.genesis_timestamp))}
                </td>
              </tr>
              {wasTransferred && (
                <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                  <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
                    Last Transfer Date
                  </td>
                  <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                    {new Intl.DateTimeFormat('default', {
                      dateStyle: 'long',
                      timeStyle: 'medium',
                    }).format(new Date(data.timestamp))}
                  </td>
                </tr>
              )}
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">
                  Inscription Height
                </td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">
                  <Link href={`/block/${data.genesis_block_height}`} className="underline">
                    {data.genesis_block_height}
                  </Link>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Inscription Fee</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.genesis_fee}</td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5 ">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Output</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.output}</td>
              </tr>
              <tr className="flex flex-col md:table-row py-3 space-y-0.5">
                <td className="md:py-2 pr-8 whitespace-nowrap underline md:no-underline text-[#9f9f9f] text-[18px]">Offset</td>
                <td className="md:py-2 break-all text-[#4f4f4f] text-[18px]">{data.offset}</td>
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

