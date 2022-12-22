import Image from "next/image"

const Paw = (props) => {
  <Image src='/paw.png'/>
}


const FootprintIcon = props => {
  return (
    <Image
      src='/paw.png'
      width={30}
      height={30}
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    />
      
  )
}

export default FootprintIcon