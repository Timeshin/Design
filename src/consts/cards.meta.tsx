import { ReactNode } from 'react'

interface CardData {
  title: ReactNode
  gradient: {
    start: string
    end: string
  }
  borderGradient: {
    start: string
    end: string
  }
  hoverGradient: {
    start: string
    end: string
  }
  img: string
  hasArrow?: boolean
}

const cardsData: CardData[] = [
  {
    title: (
      <>
        Получите <br /> партнерскую ссылку
      </>
    ),
    gradient: {
      start: '#6377E1',
      end: '#2920A5'
    },
    hoverGradient: {
      start: '#657EFF',
      end: '#2920A5'
    },
    borderGradient: {
      start: 'rgba(255, 255, 255, 0.32)',
      end: '#475FDF'
    },
    img: '/assets/images/cardImage1.png',
    hasArrow: true
  },
  {
    title: (
      <>
        Расскажите <br /> о IIII.COM
      </>
    ),
    gradient: {
      start: '#E163E1',
      end: '#741595'
    },
    hoverGradient: {
      start: '#FC69FC',
      end: '#741595'
    },
    borderGradient: {
      start: 'rgba(255, 255, 255, 0.32)',
      end: '#B247DF'
    },
    img: '/assets/images/cardImage2.png',
    hasArrow: true
  },
  {
    title: (
      <>
        Получайте хороший процент <br /> от покупок по вашей ссылке!
      </>
    ),
    gradient: {
      start: '#55CE00',
      end: '#014D1D'
    },
    hoverGradient: {
      start: '#5DE101',
      end: '#014D1D'
    },
    borderGradient: {
      start: 'rgba(255, 255, 255, 0.32)',
      end: '#3A8207'
    },
    img: '/assets/images/cardImage3.png'
  }
] as const

export default cardsData
export type { CardData }
