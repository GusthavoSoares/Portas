import estilos from './FormCadastro.module.scss'
import Icone from "../../components/Icone"
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons'

export default function FormCadastro() {
    return (
        <form className={estilos.formulario}>
            <Icone fig={faDoorClosed} classe={estilos.formulario_icone} />
            <h1>Portas</h1>
            <fieldset>
                <fieldset>
                    <input type="text" name="usuario" placeholder="Insira seu usuário" />
                </fieldset>
                <fieldset>
                    <input type="password" name="usuario" placeholder="Insira sua senha" />
                </fieldset>
                <input type="submit" name="enviar" value="Logar" />
            </fieldset>
        </form>
    )
}