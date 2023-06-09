import useSWR from 'swr'
import { BaseResponse } from '@/lib/types'
import { TTransicationItem } from '@/types/home'
import { HOME_API_URL } from '@/lib/constants'
import { fetcher } from '@/lib/helpers'
import Table, { TableColumn } from '@/components/table/Table'
import moment from 'moment'
import Skeleton from '@/components/skeleton'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
// import { mimeTypes } from '@/components/GalleryFull'

const mimeTypes: Record<string, string[]> = {
  // Safe Images https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#image_types
  image: [
    'image/apng',
    'image/avif',
    'image/gif',
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/webp',
  ],
  audio: ['audio/midi', 'audio/mod', 'audio/mpeg'],
  video: ['video/mp4', 'video/webm'],
  text: ['text/html', 'text/markdown', 'text/plain'],
  binary: ['application/epub+zip', 'application/json', 'application/pdf', 'application/pgp-signature'],
}
const getFileType = (content_type: string) => {
  let res: string = ''
  Object.keys(mimeTypes).filter((key) => {
    mimeTypes[key].filter((type) => {
      if (content_type.includes(type)) {
        res = key
      }
    })
  })
  return res
}

const columns: TableColumn<TTransicationItem>[] = [
  {
    name: 'Inscriptions',
    sortable: false,
    key: 'number',
    render: (data) => (
      <div className="flex gap-x-[1rem]">
        {/*<img*/}
        {/*  alt="img"*/}
        {/*  className="w-[40px] h-[40px] bg-[#3498DB]"*/}
        {/*  src="https://api.hiro.so/ordinals/v1/inscriptions/0bcf4ff230ceca62485d76eb498714671c4f5434523a83e23dc3a42ab4b4c8dei0/content"*/}
        {/*/>*/}
        <div className="w-[40px] h-[40px]">
          <iframe
            className="w-full aspect-square overflow-hidden"
            sandbox="allow-scripts"
            loading="lazy"
            src={`/preview/${data?.inscription_id}`}
          />
        </div>
        <div>
          <Link href={`/inscription/${data?.inscription_id}`}>Inscription#{data?.number}</Link>
          <div className="text-[12px] text-[#9F9F9F] flex gap-x-[0.5rem]">
            <div className="uppercase">{getFileType(data?.content_type || '')}</div>
            <div className="border-l-[1px] scale-y-50" />
            <div>{data?.content_length}Bytes</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Transfer',
    sortable: false,
    key: 'from_address',
    render: (data) => (
      <div>
        <div>
          From{'  '}
          <Link href={`/address/${data?.from_address}`} className="text-[#3498DB] cursor-pointer">
            {`${data?.from_address.slice(0, 6)}...${data?.from_address.slice(data?.from_address.length - 6)}`}
          </Link>
        </div>
        <div>
          To{'     '}
          <Link href={`/address/${data?.to_address}`} className="text-[#3498DB] cursor-pointer">
            {`${data?.to_address.slice(0, 6)}...${data?.to_address.slice(data?.to_address.length - 6)}`}
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: 'Time',
    sortable: false,
    key: 'block_time',
    render: (data) => <ReactTimeAgo date={data?.block_time} locale="en-US" />,
  },
]

const Transication = () => {
  const { data, error, isLoading } = useSWR<BaseResponse<TTransicationItem[]>>(
    `${HOME_API_URL}/last-transfers?limit=20`,
    fetcher
  )
  const previews = data ? data.data : Array(6).fill(null) // skeleton values
  if (!data?.data) {
    return <Skeleton table />
  }
  return <div>{previews && <Table data={previews.slice(0, 6)} columns={columns} />}</div>
}
export default Transication
