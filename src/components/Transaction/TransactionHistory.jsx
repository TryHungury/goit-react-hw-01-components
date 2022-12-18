import { Box } from "components/Box/Box"
import { TransactionBody } from "./TransactionBody"
import styled from "styled-components"

const TableStyled = styled.table`
width: 700px;
border-collapse: collapse;
margin: ${p=>p.theme.space[4]}px;
`

const Type = styled.th`
text-align: center;
border: ${p=>p.theme.borders.normal};
border-color: ${p=>p.theme.colors.accent};
color: ${p=>p.theme.colors.accent};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[4]}px;
font-weight: ${p=>p.theme.fontWeights.heading};
padding: ${p=>p.theme.space[3]}px;
`

const Amount = styled.th`
text-align: center;
border: ${p=>p.theme.borders.normal};
border-color: ${p=>p.theme.colors.accent};
color: ${p=>p.theme.colors.accent};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[4]}px;
font-weight: ${p=>p.theme.fontWeights.heading};
padding: ${p=>p.theme.space[3]}px;
background-color: ${p=>p.theme.colors.text};
`

const Currency = styled.th`
text-align: center;
border: ${p=>p.theme.borders.normal};
border-color: ${p=>p.theme.colors.accent};
color: ${p=>p.theme.colors.accent};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[4]}px;
font-weight: ${p=>p.theme.fontWeights.heading};
padding: ${p=>p.theme.space[3]}px;
`

export const TransactionHistory = ()=>{
    return <TableStyled>
        <Box width="100%" as={"thead"}>
            <Box  as={"tr"}>
                <Type>Type</Type>
                <Amount>Amount</Amount>
                <Currency>Currency</Currency>
            </Box>
        </Box>
        <TransactionBody></TransactionBody>
    </TableStyled>
}