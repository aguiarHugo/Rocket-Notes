import { Container } from "./styles";

export function TextButton({ title, isActive= false, ...rest}){
    return (
        <Container 
        type="button" 
        isActive ={isActive}
        {...rest}
        >
            { title }
        </Container>
    )
}