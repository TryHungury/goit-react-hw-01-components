import { Box } from "components/Box/Box"
import { StatsList } from "components/Stats/StatsList"
import { Description } from "components/Description/Description"

export const Profile = () => {
    return <Box display="flex" flexDirection="column" width="300px" backgroundColor="accent" border="normal" borderColor="borderColor" borderRadius="normal" borderBottom="none" as={'section'}><Description></Description>
    <StatsList></StatsList></Box>
}