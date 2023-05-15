import '../global.scss'
import { createUser } from '../firebase.js'

const buttonSignIn = document.querySelector('#button-sign-in')
buttonSignIn.addEventListener('click', () => signUp())

async function signUp() {
    const email = document.getElementById('email-input').value
    const pass = document.getElementById('pass-input').value
    const confPass = document.getElementById('confirm-pass-input').value

    if (pass !== confPass) alert('Las contraseñas no coinciden')
    else {
        const userCreated = await createUser(email, pass)
        if (userCreated.status) {
            alert('usuario creado con exito, uid: ' + userCreated.info)
        } else {
            alert(userCreated.info)
        }

    }

}