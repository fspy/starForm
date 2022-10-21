export type Montagem = {
  nome: string;
  fundo: string;
  centro?: string;
  frente: string;
};

export type Passagem = {
  superior: Montagem;
  inferior: Montagem;
};

export type Maquina = {
  nome: string;
  bitolas: string;
  passagens: {
    [key: string]: Passagem[];
  };
};
