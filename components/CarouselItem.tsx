import Image from 'next/image'
import styles from '../styles/components/CarouselItem.module.css'

import {
  SiNextDotJs,
  SiRedux,
  SiReact,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiNodeDotJs,
  SiFirebase,
  SiJavascript,
  SiGoogleplay,
  SiApple,
  SiFacebook,
  SiReactrouter,
  SiFramer,
  SiExpo
} from 'react-icons/si'

interface CarouselItemProps {
  techs: string[],
  project: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ techs, project }) => {
  return (
    <div className={styles.carouselItemContainer}>
      <Image
        src={`/${project}.png`}
        width={885}
        height={500}
      />
      <div className={styles.techLogosContainer}>
        {techs.find(element => element === 'reactjs') && <SiReact size={35} color="#61DAFB"/>}
        {techs.find(element => element === 'expo') && <SiExpo size={35} color="white"/>}
        {techs.find(element => element === 'nextjs') && <SiNextDotJs size={35} color="white"/>}
        {techs.find(element => element === 'redux') && <SiRedux size={35} color="#764ABC"/>}
        {techs.find(element => element === 'reactrouter') && <SiReactrouter size={35} color="#CA4245"/>}
        {techs.find(element => element === 'nodejs') && <SiNodeDotJs size={35} color="#659A60"/>}
        {techs.find(element => element === 'javascript') && <SiJavascript size={35} color="#61DAFB"/>}
        {techs.find(element => element === 'typescript') && <SiTypescript size={35} color="#3178C6"/>}
        {techs.find(element => element === 'html') && <SiHtml5 size={35} color="#DD4B25"/>}
        {techs.find(element => element === 'css') && <SiCss3 size={35} color="#254BDD"/>}
        {techs.find(element => element === 'framer') && <SiFramer size={35} color="white"/>}
        {techs.find(element => element === 'firebase') && <SiFirebase size={35} color="#FFCA28"/>}
        {techs.find(element => element === 'facebook') && <SiFacebook size={35} color="#1877F2"/>}
        {techs.find(element => element === 'apple') && <SiApple size={35} color="gray"/>}
        {techs.find(element => element === 'playstore') && <SiGoogleplay size={35} color="white"/>}
      </div>
    </div>
  )
}

export default CarouselItem