import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <footer className="p-3 sm:p-5 md:p-10 w-full max-w-[88rem] mx-auto">
      <div className="w-full  flex justify-between bg-[#343434]">
        <div className="p-4 sm:p-6 md:p-12 pb-8 flex flex-col">
          <a href="/">
            <img src="/logo2.svg" alt="Hiro Ordinals Beta" />
          </a>
          {/* todo: link chainhooks */}
          <div className="mt-10 flex flex-col md:flex-row justify-between text-center text-xs text-neutral-300 space-y-4 md:space-y-0">
            <div className="space-x-3">
              <a href="https://twitter.com/hirosystems">
                {/* todo: find filled twitter icon */}
                <TwitterLogoIcon className="inline-block w-5 h-5 text-neutral-0" />
              </a>
              <a href="https://github.com/hirosystems">
                <GitHubLogoIcon className="inline-block w-[18px] h-[18px] text-neutral-0" />
              </a>
              {/*<a href="https://hiro.so" className="inline-block">*/}
              {/*  &copy; {new Date().getFullYear()} Hiro Systems PBC*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-12 pb-8 flex  text-[#929292] gap-x-[3rem] text-[14px]">
          <div className="grid gap-y-[0.5rem]">
            <div>Product</div>
            <div>Explorer</div>
            <div>Mining pool</div>
          </div>
          <div className="grid gap-y-[0.5rem]">
            <div>Product</div>
            <div>Explorer</div>
            <div>Mining pool</div>
            <div>App</div>
          </div>
          <div className="grid gap-y-[0.5rem]">
            <div>Product</div>
            <div>Explorer</div>
            <div>Mining pool</div>
            <div>App</div>
            <div>Mining pool</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
