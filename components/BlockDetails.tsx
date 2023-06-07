'use client'

import useSWR from 'swr'

import { API_URL } from '../lib/constants'
import { fetcher } from '../lib/helpers'
import { InscriptionResponse, ListResponse } from '../lib/types'
import CtaLink from './CtaLink'
import InscriptionCard from './InscriptionCard'
import Loading from './Loading'
import styled from 'styled-components'

const BlockDetails = (params: { bid: string }) => {
  const { data, error, isLoading } = useSWR<ListResponse<InscriptionResponse>>(
    // todo: increase limit to 60
    `${API_URL}/inscriptions?limit=20&genesis_block=${params.bid}`,
    fetcher
  )

  if (error) return <span>Something went wrong ʕ•̠͡•ʔ</span>
  if (!params.bid) return <div>404</div>
  if (!data) return <Loading />

  return (
    <div className="p-4 pt-10 rounded-lg flex flex-col justify-between items-center">
      <BlockTitle>Block #{params.bid}</BlockTitle>
      {data.results.length ? (
        <>
          <BlockHash className="hidden md:block my-3 uppercase break-all">
            Block Hash: {data.results[0].genesis_block_hash}
          </BlockHash>
          <Inscription className="self-start">Inscriptions ({data.total})</Inscription>
        </>
      ) : (
        <p className="my-3">No inscriptions from transactions in this block</p>
      )}

      <GridWrapper>
        {data.results.map((i, index) => (
          <InscriptionCard key={index} inscription={i} />
        ))}
      </GridWrapper>

      <div className="mt-16 mb-8 flex justify-around">
        <CtaLink href={`/explore?hf=${params.bid}&ht=${params.bid}`}>
          Explore inscriptions from block #{params.bid} &rarr;
        </CtaLink>
      </div>
    </div>
  )
}

export default BlockDetails

const BlockTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: #4f4f4f;
`

const BlockHash = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #4f4f4f;
`

const Inscription = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #4f4f4f;
  margin-top: 12px;
`

const GridWrapper = styled.div`
  width:100%;
  margin-top: 27px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 22px;
`
