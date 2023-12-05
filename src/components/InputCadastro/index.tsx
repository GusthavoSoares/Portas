import Iinput from '../../interfaces/Iinput'
import Icone from '../Icone'
import estilos from './InputCadastro.module.scss'


export default function InputCadastro({texto, tipo, nome, obrigatorio = false, max, min = 3, padrao, icone, tipoIcone}:Iinput){

    return(
        <section className={estilos.inputBox}>
            {icone ? <Icone fig={tipoIcone} classe={estilos.inputBox_icone}/> : <></>}
            <input className={estilos.input} type={tipo} placeholder={texto} name={nome}  required={obrigatorio} pattern={padrao} maxLength={max} minLength={min}/>
        </section>
    )
}