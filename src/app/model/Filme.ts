import {Ator} from './Ator';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';
import {Estudio} from './Estudio';

export class Filme {
  id: number;
  titulo: string;
  dataLancamento?: string;
  precoBilhete?: number;
  dataCadastro?: Date;
  genero?: string;
  atorList?: Ator[];
  estudio: Estudio;
  classificacao?: ClassificacaoEnum;
  inativo?: boolean;
  dublado?: boolean;

  constructor() {
    this.dataCadastro = new Date();
    this.dataLancamento = '01/01/2019';
    this.atorList = [];
    this.inativo = false;
    this.dublado = false;
  }
}
