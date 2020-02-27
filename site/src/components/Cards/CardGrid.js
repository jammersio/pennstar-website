import React from 'react'
import { FlexWrap, Card } from '../Layout'
import Cta from '../Cta'

const defaultCards = [
  {
    id: 1,
    introProps: { children: "intro" },
    headingProps: { children: "heading" },
    taglineProps: { children: "tagline" },
    descriptionProps: { children: "description" },
    outroProps: { children: "outro" },
  },
  {
    id: 2,
    introProps: { children: "intro" },
    headingProps: { children: "heading" },
    taglineProps: { children: "tagline" },
    descriptionProps: { children: "description" },
    outroProps: { children: "outro" },
  },
  {
    id: 3,
    introProps: { children: "intro" },
    headingProps: { children: "heading" },
    taglineProps: { children: "tagline" },
    descriptionProps: { children: "description" },
    outroProps: { children: "outro" },
  },
  {
    id: 4,
    introProps: { children: "intro" },
    headingProps: { children: "heading" },
    taglineProps: { children: "tagline" },
    descriptionProps: { children: "description" },
    outroProps: { children: "outro" },
  }
]

export default function CardGrid({ cards, ...props }) {
  const cardsToRender = cards ? [...cards] : [...defaultCards]

  return (
    <FlexWrap
      {...props}
      mx={-4}
    >
      {cardsToRender.map(card => (
        <Card
          key={card.id}
        >
          <Cta
            {...card}
          />
        </Card>)
      )}
    </FlexWrap>
  )
}
