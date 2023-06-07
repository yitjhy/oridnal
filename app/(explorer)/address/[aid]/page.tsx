'use client'

import AddressDetails from '@/components/AddressDetails'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const LocationById = ({ params }: { params: { aid: string } }) => {
  return (
    <>
      <Header />
      <main style={{ width: '1560px', margin: '0 auto' }}>
        <AddressDetails aid={params.aid} />
      </main>
      <Footer />
    </>
  )
}

export default LocationById
