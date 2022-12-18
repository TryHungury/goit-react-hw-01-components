import { Box } from "components/Box/Box"
import { FriendListItem } from "./FriendItem"

export const FriendList = ({friends}) => {
  return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb="4" mt="4" as={"ul"}>
    {friends.map(({ avatar, name, isOnline, id })=>{
      return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}></FriendListItem>
    })}
  </Box>
}
