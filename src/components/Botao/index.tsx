import IBotao from '../../interfaces/IBotao'
import estilos from './Botao.module.scss'


export default function Botao({ texto }:IBotao ){
    return(
    <>
        <input className={estilos.botao} type="submit" value={texto} />
    </>
    )
}