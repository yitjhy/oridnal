import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
// import { useRouter } from 'next/router'
import Link from 'next/link'
// import { Tooltip } from 'antd'
// import styled from 'styled-components'
import './footer.css'

const Footer = () => {
  // const router = useRouter()
  return (
    <footer className="w-full bg-[#343434] mt-[80px]">
      <div className="w-full max-w-[88rem] mx-auto">
        <div className="w-full  flex justify-between bg-[#343434]">
          <div className="p-4 sm:p-6 md:p-12 pb-8 flex flex-col">
            <a href="/">
              <img src="/icon3.svg" alt="Hiro Ordinals Beta" />
            </a>
            {/* todo: link chainhooks */}
            <div className="mt-10 flex flex-col md:flex-row justify-between text-center text-xs text-neutral-300 space-y-4 md:space-y-0">
              <div className="space-x-3 flex">
                <a href="https://twitter.com/ordinalscan">
                  {/* todo: find filled twitter icon */}
                  <img src="/twitter.svg" alt="github ordinalscan" />
                  {/*<TwitterLogoIcon className="inline-block w-5 h-5 text-neutral-0" />*/}
                </a>
                <a href="https://medium.com/@ordinalscan">
                  <img src="/medium.svg" alt="medium ordinalscan" />
                </a>
                {/*<a href="https://hiro.so" className="inline-block">*/}
                {/*  &copy; {new Date().getFullYear()} Hiro Systems PBC*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-12 pb-8 flex  text-[#929292] gap-x-[3rem] text-[14px]">
            <div className="grid gap-y-[0.5rem]">
              <Link href="/">Home</Link>
              <Link href="/explore">Explore</Link>
            </div>
            <div className="hoverWrapper">
              <span className="trigger">API Documentation</span>
              <div className="hover-wrapper-content">Cooming Soon</div>
            </div>
            <div className="hoverWrapper">
              <span className="trigger">Developer APIs</span>
              <div className="hover-wrapper-content">Cooming Soon</div>
            </div>
            {/*<div className="grid gap-y-[0.5rem]">*/}
            {/*  <Tooltip title="Cooming Soon">*/}
            {/*    <span>API Documentation</span>*/}
            {/*  </Tooltip>*/}
            {/*</div>*/}
            {/*<div className="grid gap-y-[0.5rem]">*/}
            {/*  <Tooltip title="Cooming Soon">*/}
            {/*    <span>Developer APIs</span>*/}
            {/*  </Tooltip>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}

// const HoverWrapper = styled.div`
//   position: relative;
//   cursor: pointer;
//   &:hover {
//     .hover-wrapper {
//       opacity: 1;
//     }
//   }
//   .trigger {
//   }
//   .hover-wrapper {
//     position: absolute;
//     left: 50%;
//     top: 0;
//     transform: translate(-50%, -100%);
//     opacity: 0;
//     z-index: 10;
//     width: 124px;
//     background: black;
//     padding: 5px 10px;
//     color: #fff;
//     border-radius: 3px;
//     transition: all linear 0.15s;
//   }
// `
export default Footer
