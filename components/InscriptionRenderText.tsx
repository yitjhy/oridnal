import useSWR from 'swr'

import { pipe } from 'fp-ts/lib/function'
import { match, tryCatch } from 'fp-ts/lib/Option'
import { API_URL } from '@/lib/constants'
import { getFontSize, textFetcher } from '@/lib/helpers'
import { InscriptionResponse } from '@/lib/types'
import InscriptionRenderJson from './InscriptionRenderJson'

const InscriptionRenderText = (props: { inscription: InscriptionResponse; className?: string }) => {
  const { data, error, isLoading } = useSWR<string>(
    `${API_URL}/inscriptions/${props.inscription.id}/content`,
    textFetcher
  )

  if (error) return <div>Error loading inscription content. {error?.message}</div>
  if (!data || isLoading) return <div>Loading...</div>
  return pipe(
    tryCatch(() => JSON.parse(data)),
    match(
      () => <ContentText {...props} text={data} />,
      (content) => <InscriptionRenderJson {...props} content={content} />
    )
  )
}

function showGradient(length: number) {
  return length > 20
}

const ContentText = (props: { inscription: InscriptionResponse; text: string; className?: string }) => {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#F2F0ED] p-3">
      <p
        className="inline-block w-full whitespace-pre-wrap break-all text-center"
        style={{ fontSize: getFontSize(props.inscription.content_length) }}
      >
        {props.text}
      </p>
      {showGradient(props.inscription.content_length) && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(242, 240, 237, 0),rgba(242, 240, 237, 0),rgba(242, 240, 237, 1))',
          }}
        />
      )}
    </div>
  )
}

export default InscriptionRenderText
