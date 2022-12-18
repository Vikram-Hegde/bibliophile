import useLocalStorage from './useLocalStorage'

export default function useAuth() {
	const [auth, setAuth] = useLocalStorage()
	const authInfo = {
		isAuthenticated: auth,
		signin(value) {
			return new Promise((resolve) => {
				setAuth(JSON.stringify(value))
				setTimeout(() => {
					resolve()
				}, 1000)
			})
		},
		signout() {
			return new Promise((resolve) => {
				setAuth(callback)
				resolve()
			})
		},
	}
	return [
		authInfo.isAuthenticated,
		{ signin: authInfo.signin, signout: authInfo.signout },
	]
}
