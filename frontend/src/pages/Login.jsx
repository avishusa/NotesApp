import Form from "../components/Form"

function Login() {
    return <Form route={`${apiUrl}/api/token/`} method="login" />
}

export default Login