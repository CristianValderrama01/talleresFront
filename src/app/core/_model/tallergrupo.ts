import { VariablesAuditoria } from './variables-auditoria';
import { Programas } from './programas';

export class Tallergrupo extends VariablesAuditoria {
  idTallerGrupo: number;
  programa: Programas;
  descTallerGrupo: string;
  codTallerGrupo: string;
}
