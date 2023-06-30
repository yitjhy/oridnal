// import { useAtomValue } from 'jotai'
// import { lastInscriptionDataAtom } from '../lib/store'
// import AnimatedText from './AnimatedText'

const Intro = () => {
  // const lastInscriptionData = useAtomValue(lastInscriptionDataAtom)

  return (
    <div className="mx-auto space-y-4">
      {/*<div className="text-xs md:text-sm uppercase whitespace-nowrap text-neutral-300">*/}
      {/*  {lastInscriptionData ? (*/}
      {/*    <AnimatedText>*/}
      {/*      Last Inscription #{lastInscriptionData.number}{" "}*/}
      {/*      {new Intl.DateTimeFormat("default", {*/}
      {/*        dateStyle: "medium",*/}
      {/*        timeStyle: "short",*/}
      {/*      }).format(lastInscriptionData.date)}*/}
      {/*    </AnimatedText>*/}
      {/*  ) : (*/}
      {/*    <span className="opacity-0">placeholder</span>*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className="text-[18px] md:text-[22px] text-[#4F4F4F] font-bold">The Inscription Explorer of Bitcoin</div>
    </div>
  )
}

export default Intro
