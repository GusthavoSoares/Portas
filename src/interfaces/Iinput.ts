import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default interface Iinput{
    nome:string;
    texto:string;
    tipo:string;
    obrigatorio:boolean;
    max?:number;
    min?:number;
    padrao?:string;
    icone?: boolean;
    tipoIcone?:IconDefinition;
}