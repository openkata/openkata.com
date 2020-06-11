import styled from 'styled-components'
import tw from 'tailwind.macro'

export interface StyledProps {
  center?: boolean
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`
