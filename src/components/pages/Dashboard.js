import { AuthData } from "../../auth/AuthWrapper"

export const Dashboard = () => {

     const { user } = AuthData();

     return (
          <div className="page">
               <h2>Your Account</h2>
               <p>Gebruikersnaam: <span className="username">{user.name}</span></p>
          </div>
     )
}