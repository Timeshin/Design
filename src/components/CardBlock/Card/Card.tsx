import { FC } from 'react'
import { CardData } from '@/consts/cards.meta'

import Image from 'next/image'

import classes from './Card.module.scss'

interface CardProps {
  data: CardData
  number: number
}

const Card: FC<CardProps> = ({ data, number }) => (
  <div className={classes.card}>
    <div
      style={{
        background: `linear-gradient(${data.borderGradient.start}, ${data.borderGradient.end})`
      }}
      className={`${classes.gradientBorder} ${classes.mainBorder}`}
    />
    <div
      style={{
        background: `linear-gradient(${data.gradient.start}, ${data.gradient.end})`
      }}
      className={classes.content}
    >
      <header className={classes.cardHeader}>
        <div className={classes.numberWrapper}>
          <div
            style={{
              background: `linear-gradient(to top, ${data.borderGradient.start}, rgba(255, 255, 255, 0))`
            }}
            className={`${classes.gradientBorder} ${classes.numberBorder}`}
          />
          <span
            style={{
              background: `linear-gradient(to top, ${data.gradient.start}, ${data.gradient.end})`
            }}
            className={classes.number}
          >
            {number}
          </span>
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
