import Image from "next/image"

const pixelCat = (props) => {
  <Image src='/pixel-cat.png'/>
}


const FootprintIcon = props => {
  return (
    <Image
      src='/pixel-cat.png'
      width={30}
      height={30}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    />
      
  )
}

export default FootprintIcon