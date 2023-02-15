import { useState } from 'react'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from "./style"

export function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({ email, password })
    }
    
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />
                 <Input 
                placeholder="Senha"
                type="Password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />
                
                <Button 
                title="Entrar"
                onClick={ handleSignIn } />
                
                <Link to="/register">Cadastrar-se</Link>
                  
                  
            </Form>

            <Background />
        </Container>
    )
}