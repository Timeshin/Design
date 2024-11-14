import { CSSProperties, FC } from 'react'
import { CardData } from '@/consts/cards.meta'
import Image from 'next/image'
import Arrow from '/public/assets/icons/arrow.svg'
import classes from './Card.module.scss'

interface CardProps {
  data: CardData
  number: number
}

const Card: FC<CardProps> = ({ data, number }) => (
  <div
    className={classes.card}
    style={
      {
        '--border-start-color': data.borderGradient.start,
        '--border-end-color': data.borderGradient.end,
        '--gradient-start-color': data.gradient.start,
        '--gradient-end-color': data.gradient.end,
        '--hover-gradient-start-color': data.hoverGradient.start,
        '--hover-gradient-end-color': data.hoverGradient.end
      } as CSSProperties
    }
  >
    {data.hasArrow && (
      <div className={classes.arrow}>
        <Arrow />
      </div>
    )}
    <div className={classes.content}>
      <header className={classes.cardHeader}>
        <div className={classes.numberWrapper}>
          <div className={classes.numberBorder} />
          <span className={classes.number}>{number}</span>
        </div>
        <span className={classes.title}>{data.title}</span>
      </header>
      <Image
        alt={`card image ${number}`}
        src={data.img}
        width={420}
        height={320}
        quality={100}
      />
    </div>
  </div>
)

export default Card
