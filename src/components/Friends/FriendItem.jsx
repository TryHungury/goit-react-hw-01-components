import { Box } from "components/Box/Box"
import styled from "styled-components"

const StatusOnline = styled.span`
width: ${p=>p.theme.space[4]}px;
height: ${p=>p.theme.space[4]}px;
border-radius: ${p=>p.theme.radii.round};
background-color: ${p=>p.theme.colors.online};
margin-left: ${p=>p.theme.space[4]}px;
margin-right: ${p=>p.theme.space[3]}px;
`

const StatusOffline = styled.span`
width: ${p=>p.theme.space[4]}px;
height: ${p=>p.theme.space[4]}px;
border-radius: ${p=>p.theme.radii.round};
background-color: ${p=>p.theme.colors.offline};
margin-left: ${p=>p.theme.space[4]}px;
margin-right: ${p=>p.theme.space[3]}px;
`

const Avatar = styled.img`
padding: ${p=>p.theme.space[3]}px;
`

const Name = styled.p`
color: ${p=>p.theme.colors.text};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[4]}px;
font-weight: ${p=>p.theme.fontWeights.heading};
padding: ${p=>p.theme.space[3]}px;
`

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <Box minWidth="300px" display="flex" justifyContent="start" alignItems="center" p="2" mb="4" border="normal" borderRadius="normal" borderColor="background" backgroundColor="background" boxShadow="5px 5px #888888" as={"li"}>
        {isOnline ? <StatusOnline></StatusOnline> : <StatusOffline></StatusOffline>}
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Box>
}