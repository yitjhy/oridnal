import { InscriptionResponse } from '@/lib/types'
import Iframe from './Iframe'
import InscriptionRenderImage from './InscriptionRenderImage'
import InscriptionRenderJson, { WithContentJson } from './InscriptionRenderJson'
import InscriptionRenderText from './InscriptionRenderText'
import { usePathname } from 'next/navigation'

const InscriptionRender = (props: { inscription: InscriptionResponse; className?: string }) => {
  const pathname = usePathname()
  if (props.inscription.content_type.startsWith('image/')) {
    return <InscriptionRenderImage {...props} />
  }

  if (props.inscription.content_type.startsWith('application/json')) {
    return WithContentJson(props, InscriptionRenderJson)
  }

  if (props.inscription.content_type.startsWith('text/')) {
    // also handles json parseable content from plain text
    return (
      <div className={`${pathname?.includes('inscription') ? 'p-[20px]' : ''}`}>
        <InscriptionRenderText {...props} />
      </div>
    )
  }

  return <Iframe {...props} src={`/preview/${props.inscription.id}`} />
}

export default InscriptionRender
