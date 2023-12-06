import Botao from '../../../src/components/Botao'
import Rodape from '../../../src/components/Rodape'
import style from './OganizacaoPage.module.scss'

export default function OrganizacaoPage() {

    return (
        <div>
            <header className={style.cabecalho}>
                <div className={style.divButtons}>
                    <Botao texto="Membros" />
                    <Botao texto="Histórias" />
                </div>
            </header>
            <div className={style.divEvents}>
                <div className={style.event}>
                    <p>Evento próximo: (Horas restantes)</p>
                    <p>Nome do Evento</p>
                    <img src="https://picsum.photos/400/300" alt="vaisefoderghustavo" />
                    <div className={style.divButtonsEvent}>
                        <button type='button'>Adiar</button>
                        <button type='button'>Participantes</button>
                    </div>
                </div>
                <div className={style.event}>
                    <p>Campanha Próxima de Finalizar</p>
                    <p>(Tempo restante)</p>
                    <img src="https://picsum.photos/400/300" alt="vaisefoderghustavo" />
                    <div className={style.divButtonsEvent}>
                        <button type='button'>Adiar</button>
                        <button type='button'>Participantes</button>
                    </div>
                </div>
                <div className={style.event}>
                    <p>Evento próximo: (Horas restantes)</p>
                    <p>Nome do Evento</p>
                    <img src="https://picsum.photos/400/300" alt="vaisefoderghustavo" />
                    <div className={style.divButtonsEvent}>
                        <button type='button'>Adiar</button>
                        <button type='button'>Participantes</button>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}