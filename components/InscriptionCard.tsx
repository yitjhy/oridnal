import Link from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '../lib/helpers'
import { InscriptionResponse } from '../lib/types'
import InscriptionRender from './InscriptionRender'

const InscriptionCard = ({ inscription, light = false }: { inscription?: InscriptionResponse; light?: boolean }) => {
  if (!inscription?.id)
    return (
      <div className="border sm:p-2 md:p-3 lg:p-5 rounded-md space-y-2 md:space-y-3 lg:space-y-5">
        <div className="rounded-[4px] aspect-square" />
        <div
          className={cn(
            'opacity-0 hidden sm:inline-block text-sm rounded-[4px] px-1 md:px-2 md:py-1',
            light && 'border'
          )}
        >
          {/* placeholder */}
          #123
        </div>
      </div>
    )

  return (
    <Link
      href={`/inscription/${inscription.id}`}
      className="border sm:p-2 md:p-3 lg:p-5  space-y-2 md:space-y-3 lg:space-y-5 ease-linear duration-150 hover:-translate-y-1 hover:-translate-x-1"
    >
      <div className="w-full  aspect-square overflow-hidden">
        <InscriptionRender inscription={inscription} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'hidden sm:inline-block text-sm  px-1 md:px-2 md:py-1 bg-black text-white',
          light && 'bg-white text-neutral-300 border'
        )}
      >
        #{inscription.number}
      </motion.div>
    </Link>
  )
}

export default InscriptionCard
