import  estilos from '../src/styles/global.module.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function GlobalLayout({ children }) {
    
    return (
        <html lang="pt-br">
            <body className ={estilos.corpo}>                            
                    {children}
            </body>
        </html>
    )
}
