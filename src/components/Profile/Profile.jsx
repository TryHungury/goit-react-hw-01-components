import styled from "styled-components"
import { Stats } from "components/Stats/Stats"
import user from "../../assets/user"

export const Profile = () => {
    return <div username={user.username}>
        <Stats userStats={user.stats.followers}>followers</Stats>
        <Stats userStats={user.stats.views}>views</Stats>
        <Stats userStats={user.stats.likes}>likes</Stats>
        </div>
}


// {/* <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div> */}