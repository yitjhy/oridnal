'use client'

import useSWR from 'swr'

import { API_URL } from '../lib/constants'
import { fetcher } from '../lib/helpers'
import { InscriptionResponse, ListResponse } from '../lib/types'
import Ellipsis from './Ellipsis'
import InscriptionCard from './InscriptionCard'
import Loading from './Loading'
import styled from 'styled-components'

const AddressDetails = (params: { aid: string }) => {
  const { data, error, isLoading } = useSWR<ListResponse<InscriptionResponse>>(
    // todo: increase limit to 60
    `${API_URL}/inscriptions?limit=20&address=${params.aid}`,
    fetcher
  )

  if (error) return <span>Something went wrong ʕ•̠͡•ʔ</span>
  if (!params.aid) return <div>404</div>
  if (!data) return <Loading />

  // todo: add pagination to allow viewing all inscriptions? or link to explore page
  return (
    <div className="p-4 pt-10 rounded-lg flex flex-col justify-between items-center">
      <BlockTitle>
        Address{' '}
        <Address>
          <Ellipsis text={params.aid} />
        </Address>
      </BlockTitle>
      {data.results.length ? (
        <Inscription className="self-start">Inscriptions ({data.total})</Inscription>
      ) : (
        <p className="my-3">No inscriptions currently owned by this address</p>
      )}
      <GridWrapper>
        {data.results.map((i, index) => (
          <InscriptionCard key={index} inscription={i} />
        ))}
      </GridWrapper>
    </div>
  )
}

export default AddressDetails

const BlockTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Inscription = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #4f4f4f;
  margin-top: 58px;
`

const GridWrapper = styled.div`
  width: 100%;
  margin-top: 27px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 22px;
`

const Address = styled.span`
  display: inline-block;
  width: fit-content;
  height: 48px;
  background: #f9d560;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: #454545;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 38px;
  padding: 0 54px;
`
