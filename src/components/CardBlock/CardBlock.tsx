import CardList from './CardList/CardList'
import CardButton from './CardButton/CardButton'

import classes from './CardBlock.module.scss'

const CardBlock = () => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Зарабатывайте вместе с нами!</h1>
      <CardList />
      <CardButton />
    </div>
  </div>
)

export default CardBlock
