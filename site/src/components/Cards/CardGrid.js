import React from 'react'
import { FlexWrap } from '../Layout/Containers'
import Card from "../Cards/Card"

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
  }
  , {
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
  // console.log(cardsToRender)
  return (
    <FlexWrap
      {...props}
      mx={-4}
    >
      {cardsToRender.map(card => <Card key={card.id} ctaProps={card} />)}
    </FlexWrap>
  )
}
