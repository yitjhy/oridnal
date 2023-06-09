const Iframe = ({ src }: { src: string }) => {
  return (
    <iframe
      src={src}
      className="w-full h-full pointer-events-none border-none aspect-square"
      loading="lazy"
      sandbox="allow-scripts"
      scrolling="no"
    />
  )
}

export default Iframe
