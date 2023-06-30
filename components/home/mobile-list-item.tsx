import { FC } from 'react'
import { TLiveMintingItem, TTransicationItem } from '@/types/home'
import Link from 'next/link'
import { getFileType } from '@/components/home/utils'

const MobileListItem: FC<{ data: TTransicationItem | TLiveMintingItem }> = ({ data }) => {
  return (
    <div className="mt-[8px]">
      <div className="grid gap-x-[15px] grid-cols-2">
        <div className="flex gap-x-2 items-center">
          <div className="min-w-[40px] min-h-[40px]">
            <iframe
              className="w-full aspect-square overflow-hidden"
              sandbox="allow-scripts"
              loading="lazy"
              src={`/preview/${data?.inscription_id}`}
            />
          </div>
          <div className="flex flex-col justify-around">
            {/*<div className="text-[#3498DB] text-[14px]">2313</div>*/}
            <Link href={`/inscription/${data?.inscription_id}`} className="text-[#3498DB] cursor-pointer text-[14px] ">
              Inscription#{data?.number}
            </Link>
            <div className="text-[#9F9F9F] text-[12px] flex gap-x-1">
              <div className="uppercase">{getFileType(data?.content_type || '')}</div>
              <div>{data?.content_length}Bytes</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex gap-x-2 text-[14px]">
            From{'  '}
            <Link href={`/address/${data?.from_address}`} className="text-[#3498DB] cursor-pointer ">
              {`${data?.from_address.slice(0, 6)}...${data?.from_address.slice(data?.from_address.length - 6)}`}
            </Link>
          </div>
          <div className="flex gap-x-2 text-[14px]">
            To{'     '}
            <Link href={`/address/${data?.to_address}`} className="text-[#3498DB] cursor-pointer ">
              {`${data?.to_address.slice(0, 6)}...${data?.to_address.slice(data?.to_address.length - 6)}`}
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[90%] bg-[#E8E8E8] mt-[15px] mx-[auto]" />
    </div>
  )
}
export default MobileListItem
