import { Box } from "components/Box/Box";
import { Profile } from "components/Profile/Profile";

export const App = () => {
  return (
    <Box height= "100vh" display= "flex" justifyContent= "center" alignItems= "center" fontSize= "40px" backgroundColor="backgroundSecondary">
      <Profile></Profile>
    </Box>
  );
};