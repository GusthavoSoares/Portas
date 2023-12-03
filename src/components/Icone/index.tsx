import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icone({ fig, classe }) {
    return (
        <FontAwesomeIcon icon={fig} className={classe}></FontAwesomeIcon>
    )
}