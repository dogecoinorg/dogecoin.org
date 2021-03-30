import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import Section from "../../components/Section"
import Carousel from "../../components/Carousel"
import { useFormatMessages } from "../../utils/hooks"

import * as S from "./styled"

const hashtags = [
  { text: "fun", color: "#00665E", bg: "#FFD203" },
  { text: "bonk", color: "#FFF", bg: "#00BEB5" },
  { text: "cryptocurrency", color: "#232D91", bg: "#C3F1FF" },
  { text: "unique", color: "#FFF", bg: "#00BEB5" },
  { text: "doge", color: "#232D91", bg: "#FFF" },
  { text: "shiba", color: "#00665E", bg: "#FFD203" },
]

const SectionAbout: React.FC = () => {
  const [title, text] = useFormatMessages([{ id: "ABOUT_TITLE" }, { id: "ABOUT_TEXT" }])

  return (
    <Section as={S.Wrapper}>
      <Row center="xs">
        <Col xs={12} sm={8}>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>

          <S.ImageStack>
            <Carousel />
          </S.ImageStack>

          <S.HashtagStack>
            {hashtags.map((item, i) => (
              <S.Hashtag key={i} style={{ backgroundColor: item.bg, color: item.color }}>
                #{item.text}
              </S.Hashtag>
            ))}
          </S.HashtagStack>
        </Col>
      </Row>
    </Section>
  )
}

export default SectionAbout
