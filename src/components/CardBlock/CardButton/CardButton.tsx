import Person from '/public/assets/icons/person.svg'

import classes from './CardButton.module.scss'

const CardButton = () => (
  <button className={classes.button} type='button'>
    <Person />
    Стать партнером
  </button>
)

export default CardButton
