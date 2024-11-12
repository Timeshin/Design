import cardsData from '@/consts/cards.meta'

import Card from '../Card/Card'

import classes from './CardList.module.scss'

const CardList = () => (
  <div className={classes.cards}>
    {cardsData.map((cardData, index) => (
      <Card key={index} data={cardData} number={index + 1} />
    ))}
  </div>
)

export default CardList
