import styled from "styled-components"

const LabelStyles = styled.span`
color: ${p=>p.theme.colors.text};
background-color: ${p=>p.theme.colors.background};
`
const QuantityStyles = styled.span`
color: ${p=>p.theme.colors.text};
background-color: ${p=>p.theme.colors.background};
`

export const Stats = ({userStats, children}) => { 
    return <li>
        <LabelStyles>{children}</LabelStyles>
        <QuantityStyles>{userStats}</QuantityStyles>
    </li>
}