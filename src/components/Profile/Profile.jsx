import { Box } from "components/Box/Box"
import { StatsList } from "components/Stats/StatsList"
import { Description } from "components/Description/Description"

export const Profile = () => {
    return <Box display="flex" flexDirection="column" width="300px" backgroundColor="accent" borderRadius="normal" borderBottom="none" mb="4" mt="4" boxShadow="0 0 10px 10px #888888" as={'section'}>
    <Description></Description>
    <StatsList></StatsList></Box>
}