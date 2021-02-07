import styles from '../styles/components/Portfolio.module.css'

import Carousel, { RenderArrowProps } from 'react-elastic-carousel'
import CarouselItem from './CarouselItem'

import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

const breakPoints = [
  { width: 550, itemsToShow: 1 }
]

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.portfolioContainer}>
      <Carousel
        breakPoints={breakPoints}
        isRTL={false}
      >
        <CarouselItem
          project="eufitbrasil-controle"
          techs={[
            'reactjs',
            'facebook',
            'nodejs',
            'typescript',
            'css',
            'playstore',
            'expo'
          ]}
        />
        <CarouselItem
          project="reactchat"
          techs={[
            'reactjs',
            'firebase',
            'typescript',
            'css',
            'html',
            'reactrouter'
          ]}
        />
        <CarouselItem
          project="game-store"
          techs={[
            'reactjs',
            'nextjs',
            'redux',
            'typescript',
            'css',
            'html'
          ]}
        />
        <CarouselItem
          project="portfolio"
          techs={[
            'reactjs',
            'nextjs',
            'typescript',
            'css',
            'html',
            'framer'
          ]}
        />
      </Carousel>
    </section>
  )
}

export default Portfolio