"use client";

import Link from "next/link";

import CtaLink from "../../components/CtaLink";
import Footer from "../../components/Footer";
import GalleryPreview from "../../components/GalleryPreview";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between items-center min-h-screen w-[78rem] p-6 mx-auto space-y-6">
        {/* Intro Section */}
        <div className="max-w-2xl mx-auto space-y-10 mb-[40px]">
          {/* todo: wrap in motion */}
          <Intro />
          <div>
            <SearchBar />
            <Link
              href="/explore"
              className="mt-4 text-neutral-300 flex justify-center"
            >
              or explore all
            </Link>
          </div>
        </div>
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
            </div><div>
                <div className="text-center text-[22px]">#792347</div>
                <div className="text-center text-[#9F9F9F] text-[18px]">Blocks</div>
            </div>
        </div>
        {/* Gallery Section */}
        <div className="w-full flex  gap-10">
            <div className="w-1/2">
                <p className="mt-20 text-sm mb-2 font-bold">
                    Live Minting
                </p>
                {/*<div className="mx-auto mt-3 mb-4 h-12 w-0 border border-dashed border-l-black" />*/}
                <GalleryPreview />
            </div>
            <div className="w-1/2">
                <p className="mt-20 text-sm mb-2 font-bold">
                    Latest Transactions
                </p>
                {/*<div className="mx-auto mt-3 mb-4 h-12 w-0 border border-dashed border-l-black" />*/}
                <GalleryPreview />
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
  );
}
