import { httpRequest } from "../utils/utils"

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Signin() {

    const handleSubmit = () => {
        const USER_URL = new URL('/auth/signin', BASE_URL);
        httpRequest(USER_URL,"POST")
    }

    return (
        <div>
            <h1>Sign in</h1>
            <form action={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="username" name="username" id="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required />
                <br />
                <button type="submit">Sign In</button>
            </form>
    </div>
    );
}

export default Signin