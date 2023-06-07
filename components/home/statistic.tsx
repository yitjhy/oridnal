import useSWR from 'swr'
import { BaseResponse } from '@/lib/types'
import { HOME_API_URL } from '@/lib/constants'
import { fetcher } from '@/lib/helpers'
import { TStatistic } from '@/types/home'

const StatisticInfo = () => {
  const { data, error, isLoading } = useSWR<BaseResponse<TStatistic>>(`${HOME_API_URL}/statistical-data`, fetcher)
  return (
    <div className="w-full statistics grid grid-cols-3 gap-y-[52px] gap-x-4">
      <div>
        <div className="text-center text-[22px]">{data?.data?.inscriptions.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Inscriptions</div>
      </div>
      <div>
        <div className="text-center text-[22px]">{data?.data?.totalInscriptionFee.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Total inscription fees</div>
      </div>
      <div>
        <div className="text-center text-[22px]">{data?.data?.fee.toLocaleString()} satoshi/byte</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Fee</div>
      </div>
      <div>
        <div className="text-center text-[22px]">{data?.data?.storedData.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Stored data </div>
      </div>
      <div>
        <div className="text-center text-[22px]">{data?.data?.walletAddress.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Wallet Address</div>
      </div>
      <div>
        <div className="text-center text-[22px]">{data?.data?.blocks.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[18px]">Blocks</div>
      </div>
    </div>
  )
}
export default StatisticInfo
