import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

export const Login = () => {
    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer(
        (formData, newItem) => ({ ...formData, ...newItem }),
        { userName: "", password: "" }
    );
    const [errorMessage, setErrorMessage] = useState(null);

    const doLogin = async () => {
        try {
            await login(formData.userName, formData.password);
            navigate("/account");
        } catch (error) {
            setErrorMessage(error);
        }
    };

    return (
        <div className="page">
            <h2>Login page</h2>
            <div className="inputs">
                <div className="input">
                    <p>Login</p>
                    <input
                        value={formData.userName}
                        onChange={(e) => setFormData({ userName: e.target.value })}
                        type="text"
                        placeholder="Gebruikersnaam"
                    />
                </div>
                <div className="input">
                    <p>Wachtwoord</p>
                    <input
                        value={formData.password}
                        onChange={(e) => setFormData({ password: e.target.value })}
                        type="password"
                        placeholder="Wachtwoord"
                    />
                </div>
                <div className="button">
                    <button onClick={doLogin}>Log in</button>
                </div>
                {errorMessage && (
                    <div className="error">{errorMessage}</div>
                )}
            </div>
        </div>
    );
};
