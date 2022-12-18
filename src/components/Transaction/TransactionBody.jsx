import { Box } from "components/Box/Box"
import transactions from "../../assets/transactions";
import styled from "styled-components";

const TdStyled = styled.td`
text-align: center;
color: ${p=>p.theme.colors.text};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[4]}px;
font-weight: ${p=>p.theme.fontWeights.heading};
padding: ${p=>p.theme.space[3]}px;
border: ${p=>p.theme.borders.normal};
background-color: ${p=>p.theme.colors.background};
`

const TdStyledExclusive = styled.td`
text-align: center;
color: ${p=>p.theme.colors.accent};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[4]}px;
font-weight: ${p=>p.theme.fontWeights.heading};
padding: ${p=>p.theme.space[3]}px;
border: ${p=>p.theme.borders.normal};
border-color: ${p=>p.theme.colors.text};
background-color: ${p=>p.theme.colors.backgroundSecondary};
`

export const TransactionBody = ()=>{
    return transactions.map(({id,type,amount,currency})=>{
        return <Box key={id} as={"tbody"}>
            <tr>
                <TdStyled>{type}</TdStyled>
                <TdStyledExclusive>{amount}</TdStyledExclusive>
                <TdStyled>{currency}</TdStyled>
            </tr> 
        </Box>
    })
}