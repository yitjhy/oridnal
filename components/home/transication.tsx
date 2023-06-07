import useSWR from 'swr'
import { BaseResponse } from '@/lib/types'
import { TTransicationItem } from '@/types/home'
import { HOME_API_URL } from '@/lib/constants'
import { fetcher } from '@/lib/helpers'
import Table, { TableColumn } from '@/components/table/Table'
import moment from 'moment'

const columns: TableColumn<TTransicationItem>[] = [
  {
    name: 'Inscritions',
    sortable: false,
    key: 'number',
    render: (data) => <span>Inscritions#{data?.number}</span>,
  },
  {
    name: 'Transfer',
    sortable: false,
    key: 'from_address',
    render: (data) => (
      <div>
        <div>
          From{'  '}
          <span className="text-[#3498DB] cursor-pointer">
            {`${data?.from_address.slice(0, 6)}...${data?.from_address.slice(data?.from_address.length - 6)}`}
          </span>
        </div>
        <div>
          To{'     '}
          <span className="text-[#3498DB] cursor-pointer">
            {`${data?.to_address.slice(0, 6)}...${data?.to_address.slice(data?.to_address.length - 6)}`}
          </span>
        </div>
      </div>
    ),
  },
  {
    name: 'Time',
    sortable: false,
    key: 'block_time',
    render: (data) => <span>{moment(data?.block_time).format('YYYY.MM.DD HH:mm:ss')}</span>,
  },
]
const Transication = () => {
  const { data, error, isLoading } = useSWR<BaseResponse<TTransicationItem[]>>(
    `${HOME_API_URL}/last-transfers?limit=20`,
    fetcher
  )
  const previews = data ? data.data : Array(6).fill(null) // skeleton values
  return <div>{previews && <Table data={previews.slice(0, 6)} columns={columns} />}</div>
}
export default Transication
