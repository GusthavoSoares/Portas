
import FormCadastro from '../src/components/FormCadastro'
import estilos from './general.module.scss'

export default function PaginaLogin() {
    return (
        <main className={estilos.referencia}>
            <FormCadastro />
        </main>
    )
}