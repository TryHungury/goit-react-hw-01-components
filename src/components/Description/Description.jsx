import { Box } from "components/Box/Box"
import styled from "styled-components"
import user from "../../assets/user"

const Avatar = styled.img`
width: 40%;
border-radius: ${p=>p.theme.radii.round};
margin-bottom: ${p=>p.theme.space[5]}px;
`

const Name = styled.p`
  color: ${p=>p.theme.colors.text};
  font-family: ${p=>p.theme.fonts.heading};
  font-size: ${p=>p.theme.fontSizes[4]}px;
  font-weight: ${p=>p.theme.fontWeights.bold};
  padding: ${p=>p.theme.space[3]}px;
`

const Tag = styled.p`
color: ${p=>p.theme.colors.secondary};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[3]}px;
font-weight: ${p=>p.theme.fontWeights.body};
padding: ${p=>p.theme.space[3]}px;
`

const Location = styled.p`
color: ${p=>p.theme.colors.secondary};
font-family: ${p=>p.theme.fonts.monospace};
font-size: ${p=>p.theme.fontSizes[3]}px;
font-weight: ${p=>p.theme.fontWeights.body};
padding: ${p=>p.theme.space[3]}px;
`

export const Description = () => {
    return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  p="40px">
    <Avatar src={user.avatar} alt={user.username}></Avatar>
    <Name>{user.username}</Name>
    <Tag>@{user.tag}</Tag>
    <Location>{user.location}</Location>
    </Box>
}
