import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Iicone from "../../interfaces/Iicone"

export default function Icone({ fig, classe }) {
    return (
        <FontAwesomeIcon icon={fig} className={classe}></FontAwesomeIcon>
    )
}