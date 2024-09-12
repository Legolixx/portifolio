import Image from "next/image"

interface DevImgProps {
  containerStyles?: string;
  imgSrc: string;
}

const DevImg = ({containerStyles, imgSrc}: DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='dev_img' />
    </div>
  )
}

export default DevImg