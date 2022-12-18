import { Box } from "components/Box/Box"
import { StatisticsItem } from "./StatisticsItem"
import data from "../../assets/data"

export const StatisticsList = () => {
    return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" borderTop="normal" borderColor="accent" as={`ul`}>
        {data.map(({id, label, percentage}) => {
        return <StatisticsItem key={id} title={label} stats={percentage}></StatisticsItem>})}
    </Box>
    )    
}