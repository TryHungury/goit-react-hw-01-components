import { Box } from "components/Box/Box"
import styled from "styled-components"

const LabelStyles = styled.span`
    color: ${p=>p.theme.colors.text};
    margin-bottom: ${p=>p.theme.space[3]}px;
    font-family: ${p=>p.theme.fonts.heading};
    font-size: ${p=>p.theme.fontSizes[3]}px;
    font-weight: ${p=>p.theme.fontWeights.body};
`

const QuantityStyles = styled.span`
    color: ${p=>p.theme.colors.text};
    font-family: ${p=>p.theme.fonts.body};
    font-size: ${p=>p.theme.fontSizes[4]}px;
    font-weight: ${p=>p.theme.fontWeights.bold};
`

export const Stats = ({userStats, children}) => { 
    switch (children) {
        case 'Followers':
            return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" backgroundColor="background"  border="normal" borderColor="borderColor" p="15px"  borderBottomLeftRadius="normal">
            <LabelStyles>{children}</LabelStyles>
            <QuantityStyles>{userStats}</QuantityStyles>
        </Box>

        case 'Views':
            return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" backgroundColor="background"  border="normal" borderColor="borderColor" p="15px">
            <LabelStyles>{children}</LabelStyles>
            <QuantityStyles>{userStats}</QuantityStyles>
        </Box>

        case 'Likes':
            return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" backgroundColor="background"  border="normal" borderColor="borderColor" p="15px"  borderBottomRightRadius="normal">
            <LabelStyles>{children}</LabelStyles>
            <QuantityStyles>{userStats}</QuantityStyles>
        </Box>

        default:
            return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" backgroundColor="background"  border="normal" borderColor="borderColor" p="15px">
            <LabelStyles>{children}</LabelStyles>
            <QuantityStyles>{userStats}</QuantityStyles>
        </Box>
    }
}