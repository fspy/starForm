import { builder } from "./builder";
import { db } from "./db";

builder.queryType({
  fields: (t) => ({
    formadoras: t.prismaField({
      type: ["Formadora"],
      nullable: true,
      resolve: async () => db.formadora.findMany(),
    }),
    passagens: t.prismaField({
      type: ["Passagem"],
      args: { bitolaId: t.arg.int({ required: true }) },
      resolve: async (query, _, args) =>
        db.passagem.findMany({
          ...query,
          where: { bitolaId: args.bitolaId },
          orderBy: { nome: "asc" },
        }),
    }),
  }),
});

builder.prismaObject("Formadora", {
  name: "Formadora",
  fields: (t) => ({
    id: t.exposeID("id"),
    nome: t.exposeString("nome"),
    bitolas: t.relation("bitolas"),
  }),
});

builder.prismaObject("Bitola", {
  name: "Bitola",
  fields: (t) => ({
    id: t.exposeID("id"),
    tamanho: t.exposeFloat("tamanho"),
    passagens: t.relation("passagens"),
    formadora: t.relation("formadora"),
  }),
});

builder.prismaObject("Passagem", {
  name: "Passagem",
  fields: (t) => ({
    id: t.exposeID("id"),
    nome: t.exposeString("nome"),
    lateral: t.relation("lateral", { nullable: true }),
    superior: t.relation("superior", { nullable: true }),
    inferior: t.relation("inferior", { nullable: true }),
    entreRolos: t.exposeFloat("entreRolos"),
    // bitola: t.relation("bitola"),
  }),
});

builder.prismaObject("Ferramenta", {
  name: "Ferramenta",
  fields: (t) => ({
    id: t.exposeID("id"),
    nome: t.exposeString("nome"),
    fundo: t.exposeString("fundo", { nullable: true }),
    frente: t.exposeString("frente", { nullable: true }),
    // lateral: t.relation("lateral"),
    // superior: t.relation("superior"),
    // inferior: t.relation("inferior"),
  }),
});

export const schema = builder.toSchema();
