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
        draggable={false}
      />
      <div className={styles.techLogosContainer}>
        {techs.find(element => element === 'reactjs') && <SiReact size={20} color="#61DAFB"/>}
        {techs.find(element => element === 'expo') && <SiExpo size={20} color="white"/>}
        {techs.find(element => element === 'nextjs') && <SiNextDotJs size={20} color="white"/>}
        {techs.find(element => element === 'redux') && <SiRedux size={20} color="#764ABC"/>}
        {techs.find(element => element === 'reactrouter') && <SiReactrouter size={20} color="#CA4245"/>}
        {techs.find(element => element === 'nodejs') && <SiNodeDotJs size={20} color="#659A60"/>}
        {techs.find(element => element === 'javascript') && <SiJavascript size={20} color="#61DAFB"/>}
        {techs.find(element => element === 'typescript') && <SiTypescript size={20} color="#3178C6"/>}
        {techs.find(element => element === 'html') && <SiHtml5 size={20} color="#DD4B25"/>}
        {techs.find(element => element === 'css') && <SiCss3 size={20} color="#254BDD"/>}
        {techs.find(element => element === 'framer') && <SiFramer size={20} color="white"/>}
        {techs.find(element => element === 'firebase') && <SiFirebase size={20} color="#FFCA28"/>}
        {techs.find(element => element === 'facebook') && <SiFacebook size={20} color="#1877F2"/>}
        {techs.find(element => element === 'apple') && <SiApple size={20} color="gray"/>}
        {techs.find(element => element === 'playstore') && <SiGoogleplay size={20} color="white"/>}
      </div>
      {project !== 'portfolio' && <a target="_blank"
        href={
          project === 'eufitbrasil-controle' ?
          'https://play.google.com/store/apps/details?id=com.eufitbrasil.eufitbrasilcontrol' :
          project === 'reactchat' ?
          'https://github.com/joaorodrs/reactchat' :
          'https://github.com/joaorodrs/nextshop'
        }
      >Detalhes</a>}
    </div>
  )
}

export default CarouselItem