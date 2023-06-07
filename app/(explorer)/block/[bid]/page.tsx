'use client'

import BlockDetails from '@/components/BlockDetails'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const BlockById = ({ params }: { params: { bid: string } }) => {
  return (
    <>
      <Header />
      <main style={{ width: '1560px', margin: '0 auto' }}>
        <BlockDetails bid={params.bid} />
      </main>
      <Footer />
    </>
  )
}

export default BlockById
