import { Box } from "components/Box/Box"
import styled from "styled-components"
import { StatisticsList } from "./StatisticsList"
import PropTypes from 'prop-types';

const Title = styled.h2`
    color: ${p=>p.theme.colors.text};
    font-family: ${p=>p.theme.fonts.monospace};
    font-size: ${p=>p.theme.fontSizes[4]}px;
    font-weight: ${p=>p.theme.fontWeights.heading};
    text-transform: uppercase;
    padding: ${p=>p.theme.space[5]}px;
`

export const Statistics = ({title}) => {
    return <Box display="flex"  flexDirection="column" justifyContent="center" alignItems="center" bg="background" border="normal" borderColor="accent" borderTopLeftRadius="normal" borderTopRightRadius="normal" mb="4" mt="4" as={'section'}>
        {title && <Title>{title}</Title>}
        <StatisticsList></StatisticsList>
    </Box>
}

Statistics.propTypes = {
    title: PropTypes.string,
}