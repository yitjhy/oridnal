'use client'

import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard'
import { usePathname } from 'next/navigation'
import Search from '@/components/header/search'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

const Header = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <header className="flex justify-between px-[5rem] py-8 w-full  mx-auto">
      <div className="flex gap-x-[45px]">
        <a href="/">
          <img src="/icon3.svg" alt="Hiro Ordinals Beta" />
        </a>
        {pathname !== '/' && (
          <div className="w-[400px] hidden sm:block">
            <Search />
          </div>
        )}
      </div>

      {children}
      {/* todo: explore button, stats, hiro.so */}
      <div className="hidden sm:block">
        {/*<HoverCard openDelay={0}>*/}
        {/*  <HoverCardTrigger className="px-3.5 py-2.5 rounded-md cursor-default hover:bg-neutral-0 select-none">*/}
        {/*    Explore*/}
        {/*  </HoverCardTrigger>*/}
        {/*  <HoverCardContent className="flex flex-col p-1">*/}
        {/*    <Link*/}
        {/*      href="/explore"*/}
        {/*      className="px-3.5 py-2.5 rounded-md hover:bg-neutral-0"*/}
        {/*    >*/}
        {/*      All inscriptions*/}
        {/*    </Link>*/}
        {/*    <Link*/}
        {/*      href="/period"*/}
        {/*      className="px-3.5 py-2.5 rounded-md hover:bg-neutral-0"*/}
        {/*    >*/}
        {/*      By halving period*/}
        {/*    </Link>*/}
        {/*  </HoverCardContent>*/}
        {/*</HoverCard>*/}
        {/*<HoverCard openDelay={0}>*/}
        {/*  <HoverCardTrigger className="opacity-50 cursor-not-allowed">*/}
        {/*    <span*/}
        {/*      // todo: change back to Link*/}
        {/*      // href="/stats"*/}
        {/*      className="px-3.5 py-2.5 rounded-md hover:bg-neutral-0"*/}
        {/*    >*/}
        {/*      Stats*/}
        {/*    </span>*/}
        {/*  </HoverCardTrigger>*/}
        {/*  <HoverCardContent className="px-2">*/}
        {/*    Under Construction 🚧*/}
        {/*  </HoverCardContent>*/}
        {/*</HoverCard>*/}
        <Link
          href="/"
          className={`px-[1.5rem] py-2.5 rounded-md ${
            pathname === '/' ? 'text-[#F5BD07]' : 'text-[#656565]'
          } hover:text-[#F5BD07]`}
        >
          Home
        </Link>
        <Link
          href="/explore"
          className={`px-[1.5rem] py-2.5 rounded-md ${
            pathname === '/explore' ? 'text-[#F5BD07]' : 'text-[#656565]'
          } hover:text-[#F5BD07]`}
        >
          Explore
        </Link>
        {/*<Link*/}
        {/*  href="/block-chain"*/}
        {/*  className={`px-[1.5rem] py-2.5 rounded-md ${*/}
        {/*    pathname === '/block-chain' ? 'text-[#F5BD07]' : 'text-[#656565]'*/}
        {/*  } hover:text-[#F5BD07]`}*/}
        {/*>*/}
        {/*  Blockchain*/}
        {/*</Link>*/}
      </div>
    </header>
  )
}

export default Header
