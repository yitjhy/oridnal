'use client'

import Link from 'next/link'

import CtaLink from '../../components/CtaLink'
import Footer from '../../components/Footer'
import GalleryPreview from '../../components/GalleryPreview'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import SearchBar from '../../components/SearchBar'
import Statistic from '../../components/home/statistic'
import LiveMinting from '../../components/home/live-minting'
import Transication from '../../components/home/transication'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between items-center min-h-screen w-[85rem] mx-auto space-y-8 pt-[7rem]">
        {/* Intro Section */}
        <div className="w-[62rem]  space-y-3 mb-[40px]">
          {/* todo: wrap in motion */}
          <Intro />
          <div>
            <SearchBar />
            <Link
              href="/explore"
              className="mt-4 text-neutral-300 flex justify-center ease-linear duration-150 hover:-translate-y-[2px] hover:-translate-x-[2px]"
            >
              or explore all
            </Link>
          </div>
        </div>
        <Statistic />
        {/* Gallery Section */}
        <div className="w-full flex  gap-10">
          <div className="w-1/2">
            <p className="mt-20 text-sm mb-2 font-bold flex gap-x-[8px] ml-[8px]">
              <img src="/minting.svg" alt="minting" />
              Live Minting
            </p>
            {/*<div className="mx-auto mt-3 mb-4 h-12 w-0 border border-dashed border-l-black" />*/}
            <LiveMinting />
            {/*<GalleryPreview />*/}
          </div>
          <div className="w-1/2">
            <p className="mt-20 text-sm mb-2 font-bold flex gap-x-[8px] ml-[8px]">
              <img src="/transication.svg" alt="transication" />
              Latest Transactions
            </p>
            {/*<div className="mx-auto mt-3 mb-4 h-12 w-0 border border-dashed border-l-black" />*/}
            <Transication />
          </div>
          {/*<div className="mt-16 flex justify-around">*/}
          {/*  <CtaLink href="/explore">*/}
          {/*    Explore all, sort, and filter &rarr;*/}
          {/*  </CtaLink>*/}
          {/*</div>*/}
        </div>

        {/*<div className="w-full py-8">*/}
        {/*  <hr className="border-dashed border-neutral-200" />*/}
        {/*</div>*/}

        {/*<div className="grid md:grid-cols-2 w-full gap-5">*/}
        {/*  <div className="p-8 border border-neutral-0 rounded-[6px]">*/}
        {/*    <div className="rounded bg-neutral-0 w-16 h-16 pl-2 flex items-center text-xl overflow-hidden">*/}
        {/*      <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-0 pointer-events-none select-none">*/}
        {/*        #8030*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*    <h4 className="mt-7 text-2xl">Looking to make an inscription?</h4>*/}
        {/*    <p className="mt-4">*/}
        {/*      Download{" "}*/}
        {/*      <a*/}
        {/*        href="https://wallet.hiro.so/"*/}
        {/*        target="_blank"*/}
        {/*        className="text-neutral-300"*/}
        {/*      >*/}
        {/*        Hiro Wallet*/}
        {/*      </a>{" "}*/}
        {/*      and try{" "}*/}
        {/*      <a*/}
        {/*        href="https://gamma.io/"*/}
        {/*        target="_blank"*/}
        {/*        className="text-neutral-300"*/}
        {/*      >*/}
        {/*        Gamma.io*/}
        {/*      </a>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*  <div className="p-8 border border-neutral-0 rounded-[6px]">*/}
        {/*    <div className="rounded bg-neutral-0 w-16 h-16 flex justify-center items-center pointer-events-none">*/}
        {/*      <img src="/b-illustration.svg" alt="Bitcoin Icon" />*/}
        {/*    </div>*/}
        {/*    <h4 className="mt-7 text-2xl">What are Ordinals?</h4>*/}
        {/*    <p className="mt-4">*/}
        {/*      Ordinal Inscriptions, similar to NFTs, are digital assets*/}
        {/*      inscribed on a satoshi, the lowest denomination of a Bitcoin*/}
        {/*      (BTC).{" "}*/}
        {/*      <a*/}
        {/*        href="https://www.hiro.so/blog/what-are-bitcoin-ordinals "*/}
        {/*        target="_blank"*/}
        {/*        className="text-neutral-300"*/}
        {/*      >*/}
        {/*        Learn more.*/}
        {/*      </a>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </main>
      <Footer />
    </>
  )
}
