import { Box } from "components/Box/Box"
import styled from "styled-components"
import { StatisticsList } from "./StatisticsList"

const Title = styled.h2`
    color: ${p=>p.theme.colors.text};
    font-family: ${p=>p.theme.fonts.monospace};
    font-size: ${p=>p.theme.fontSizes[4]}px;
    font-weight: ${p=>p.theme.fontWeights.heading};
    text-transform: uppercase;
    padding: ${p=>p.theme.space[5]}px;
`

export const Statistics = () => {
    return <Box display="flex"  flexDirection="column" justifyContent="center" alignItems="center"  as={'section'} bg="background" border="normal" borderTopLeftRadius="normal" borderToprightRadius="normal">
        <Title>Upload stats</Title>
        <StatisticsList></StatisticsList>
    </Box>
}