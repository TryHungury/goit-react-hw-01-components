import { Stats } from "./Stats"
import user from "../../assets/user"
import { Box } from "components/Box/Box"


export const StatsList = () => {
    return <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Stats userStats={user.stats.followers}>Followers</Stats>
        <Stats userStats={user.stats.views}>Views</Stats>
        <Stats userStats={user.stats.likes}>Likes</Stats>
    </Box>
}