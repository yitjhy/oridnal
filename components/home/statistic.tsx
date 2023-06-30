import useSWR from 'swr'
import { BaseResponse } from '@/lib/types'
import { HOME_API_URL } from '@/lib/constants'
import { fetcher } from '@/lib/helpers'
import { TStatistic } from '@/types/home'

const StatisticInfo = () => {
  const { data, error, isLoading } = useSWR<BaseResponse<TStatistic>>(`${HOME_API_URL}/statistical-data`, fetcher)
  const { data: feeData } = useSWR<BaseResponse<{ fastestFee: number }>>(`${HOME_API_URL}/get-fastest-fee`, fetcher)
  return (
    <div className="w-full statistics grid grid-cols-2 md:grid-cols-3 gap-y-[52px] gap-x-4">
      <div>
        <div className="text-center text-[18px] sm:text-[22px]">{data?.data?.inscriptions.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[14px] sm:text-[18px]">Inscriptions</div>
      </div>
      <div>
        <div className="text-center text-[18px] sm:text-[22px]">
          {data?.data?.totalInscriptionFee.toLocaleString() || '-'} BTC
        </div>
        <div className="text-center text-[#9F9F9F] text-[14px] sm:text-[18px]">Total inscription fees</div>
      </div>
      <div>
        <div className="text-center text-[18px] sm:text-[22px]">
          {feeData?.data?.fastestFee.toLocaleString()} satoshi/byte
        </div>
        <div className="text-center text-[#9F9F9F] text-[14px] sm:text-[18px]">Fee</div>
      </div>
      <div>
        <div className="text-center text-[18px] sm:text-[22px]">
          {data?.data?.storedData.toLocaleString() || '-'} GB
        </div>
        <div className="text-center text-[#9F9F9F] text-[14px] sm:text-[18px]">Stored data </div>
      </div>
      <div>
        <div className="text-center text-[18px] sm:text-[22px]">
          {data?.data?.walletAddress.toLocaleString() || '-'}
        </div>
        <div className="text-center text-[#9F9F9F] text-[14px] sm:text-[18px]">Wallet Address</div>
      </div>
      <div>
        <div className="text-center text-[22px]">{data?.data?.blocks.toLocaleString() || '-'}</div>
        <div className="text-center text-[#9F9F9F] text-[14px] sm:text-[18px]">Blocks</div>
      </div>
    </div>
  )
}
export default StatisticInfo
