
import estilos from './FormCadastro.module.scss'
import Icone from "../../components/Icone"
import { faDoorClosed, faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import InputCadastro from '../InputCadastro'
import Botao from '../Botao'


export default function FormCadastro() {

    
    return (
        <form className={estilos.formulario} method="post">
            <Icone fig={faDoorClosed} classe={estilos.formulario_icone} />
            <h1 className={estilos.formulario_texto}>Portas</h1>
            <InputCadastro nome="Login" texto="Insira seu login" tipo="text" obrigatorio={true} icone={true} tipoIcone={faUser} max={20} />
            <InputCadastro nome="Senha" texto="Insira sua senha" tipo="password" obrigatorio={true} icone={true} tipoIcone={faKey} />
            <Botao texto="Logar" />
        </form>
    )
}