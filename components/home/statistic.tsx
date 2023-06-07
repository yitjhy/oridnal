import useSWR from 'swr'
import { InscriptionResponse, ListResponse } from '@/lib/types'
import { API_URL } from '@/lib/constants'
import { fetcher } from '@/lib/helpers'

const StatisticInfo = () => {
  const { data, error, isLoading } = useSWR<ListResponse<InscriptionResponse>>(
    `${API_URL}/api/statistical-data`,
    fetcher
  )
  console.log(data)
  return (
    <div className="w-full statistics grid grid-cols-3 gap-y-[52px] gap-x-4">
      <div>
        <div className="text-center text-[22px]">10,456,046</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Inscriptions</div>
      </div>
      <div>
        <div className="text-center text-[22px]">810,36</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Total inscription fees</div>
      </div>
      <div>
        <div className="text-center text-[22px]">42 satoshi/byte</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Fee</div>
      </div>
      <div>
        <div className="text-center text-[22px]">9.5GB</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Stored data </div>
      </div>
      <div>
        <div className="text-center text-[22px]">810,326</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Wallet Address</div>
      </div>
      <div>
        <div className="text-center text-[22px]">#792347</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Blocks</div>
      </div>
    </div>
  )
}
export default StatisticInfo
