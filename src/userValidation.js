export function userValidation(userIsSignedIn) {

    const path = window.location.pathname

    if (!userIsSignedIn) {
        if (!(path === '/' || path.includes('log-in')))

            console.log('voy a redireccionar', path)
            //window.location.replace('/log-in/')
    } else {
        alert('usuario está logeado')
    }
}