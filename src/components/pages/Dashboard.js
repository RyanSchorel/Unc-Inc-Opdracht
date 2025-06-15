import { AuthData } from "../../auth/AuthWrapper"

export const Dashboard = () => {

     const { user } = AuthData();

     return (
          <div className="page">
               <h2>Welkom op jou eigen dashboard {user.name}!</h2>
               <p>Gebruikersnaam: [<span className="username">{user.name}</span>]</p>
               <p>Wachtwoord: [<span className="password">letmein</span>]</p>
          </div>
     )
}