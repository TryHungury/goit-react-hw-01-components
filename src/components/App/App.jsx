import { Box } from "components/Box/Box";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";

export const App = () => {
  return (
    <Box height= "100vh" display= "flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" fontSize= "40px" backgroundColor="backgroundSecondary">
      <Profile></Profile>
      <Statistics></Statistics>
    </Box>
  );
};