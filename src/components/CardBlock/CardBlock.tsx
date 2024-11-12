import CardList from './CardList/CardList'

import classes from './CardBlock.module.scss'

const CardBlock = () => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Зарабатывайте вместе с нами!</h3>
      <CardList />
    </div>
  </div>
)

export default CardBlock
