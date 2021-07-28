import React from 'react'



const SignUp =  ({history}) =>{

    handleSignUp = () =>{

    }
 

    return(
        <div>
            <form onSubMit ={handleSignUp}>
                <label> Email
                    <input name="email" placeholder ="Email" type="email"/>
                </label>
                <label> Contraseña
                    <input name="password" placeholder ="Password" type="password"/>
                </label>
                <button type = "submit"> Registrarse</button>
            </form>

        </div>
    )
}


export default SignUp