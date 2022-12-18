import { Box } from "components/Box/Box"
import styled from "styled-components"

const StatLabel = styled.span`
    color: ${p=>p.theme.colors.accent};
    font-family: ${p=>p.theme.fonts.monospace};
    font-size: ${p=>p.theme.fontSizes[3]}px;
    font-weight: ${p=>p.theme.fontWeights.body};
    padding: ${p=>p.theme.space[2]}px;
`

const StatPercentage = styled.span`
    color: ${p=>p.theme.colors.accent};
    box-shadow: 0 0 ${p=>p.theme.space[3]}px ${p=>p.theme.colors.text};
    border-radius: ${p=>p.theme.radii.normal};
    font-family: ${p=>p.theme.fonts.monospace};
    font-size: ${p=>p.theme.fontSizes[4]}px;
    font-weight: ${p=>p.theme.fontWeights.heading};
    padding: ${p=>p.theme.space[2]}px;
`

function colorPicker() {
    let arr = [1,1,1,1,1,1].map((el)=>{
        return el * (Math.round(Math.random() * 10))
    });
    
    arr.push("#");
    
    return arr.reverse().join("");
}

export const StatisticsItem = ({title, stats}) => {
    return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" as={`li`} p="4" backgroundColor={colorPicker()}>
        <StatLabel>{title}</StatLabel>
        <StatPercentage>{stats}%</StatPercentage>
    </Box>
}
