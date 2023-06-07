import Link from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '../lib/helpers'
import { InscriptionResponse } from '../lib/types'
import InscriptionRender from './InscriptionRender'
import styled from 'styled-components'

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
          #123
        </div>
      </div>
    )

  return (
    <CardWrapper href={`/inscription/${inscription.id}`}>
      <div className="w-full aspect-square overflow-hidden">
        <InscriptionRender inscription={inscription} />
      </div>
      <Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        #{inscription.number}
      </Motion>
    </CardWrapper>
  )
}

export default InscriptionCard

const CardWrapper = styled(Link)`
  width: 256px;
  height: 300px;
  border: 1px solid #b9b9b9;
  padding:10px;
`

const Motion = styled(motion.div)`
  margin-top: 16px;
  margin-bottom: 16px;
  color: #4f4f4f;
  font-size: 18px;
  line-height: 24px;
`
