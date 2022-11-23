const passagensBase = [
  {
    nome: "1",
    superior: { nome: "1T-1", fundo: "1T-5" },
    inferior: { nome: "1B-1", fundo: "1B-5" },
  },
  { nome: "2", lateral: { nome: "2L" } },
  {
    nome: "3",
    superior: { nome: "3T-1", fundo: "3T-20", frente: "3T-15" },
    inferior: { nome: "3B-1", fundo: "3B-10", frente: "3B-5" },
  },
  { nome: "4", lateral: { nome: "4L" } },
  {
    nome: "5",
    superior: { nome: "5T-1", fundo: "5T-35", frente: "3T-30" },
    inferior: { nome: "5B-1", fundo: "5B-20", frente: "3B-15" },
  },
  { nome: "6", lateral: { nome: "6L" } },
  {
    nome: "7",
    superior: { nome: "7T-1", fundo: "7T-55", frente: "7T-50" },
    inferior: { nome: "7B-1", fundo: "7B-30", frente: "7B-25" },
  },
  { nome: "8", lateral: { nome: "8L" } },
  {
    nome: "9",
    superior: { nome: "9T-1 / 9T-2 / 9T-3", fundo: "9T-55", frente: "9T-50" },
    inferior: { nome: "9B-1", fundo: "9B-55", frente: "9B-50" },
  },
  { nome: "10", lateral: { nome: "10L" } },
  {
    nome: "11",
    superior: {
      nome: "11T-1 / 11T-2 / 11T-3",
      fundo: "11T-55",
      frente: "11T-50",
    },
    inferior: { nome: "11B-1", fundo: "11B-55", frente: "11B-50" },
  },
  { nome: "11a (SG)", superior: { nome: "11a (SG)" } },
  {
    nome: "11bT-1 / 11bT-2 / 11bT-3",
    superior: { nome: "11bT-1 / 11bT-2 / 11bT-3" },
  },
  { nome: "12RS x3", superior: { nome: "12RS x3" } },
  { nome: "13 (OV)", superior: { nome: "13 (OV)" } },
  {
    nome: "14",
    superior: { nome: "14T-1", fundo: "14T-20", frente: "14T-15" },
    inferior: { nome: "14B-1", fundo: "14B-20", frente: "14B-15" },
  },
  { nome: "15", lateral: { nome: "15L" } },
  {
    nome: "16",
    superior: { nome: "16T-1", fundo: "16T-20", frente: "16T-15" },
    inferior: { nome: "16B-1", fundo: "16B-20", frente: "16B-15" },
  },
  { nome: "17", lateral: { nome: "17L" } },
  {
    nome: "18",
    superior: { nome: "18T-1", fundo: "18T-20", frente: "18T-15" },
    inferior: { nome: "18B-1", fundo: "18B-20", frente: "18B-15" },
  },
  { nome: "19", lateral: { nome: "19L" } },
  {
    nome: "20",
    superior: { nome: "20T-1", fundo: "20T-20", frente: "20T-15" },
    inferior: { nome: "20B-1", fundo: "20B-20", frente: "20B-15" },
  },
  { nome: "21 x4", lateral: { nome: "21 x4" } },
  { nome: "22A x2", superior: { nome: "22B x2" } },
];

const entreRolos = {
  12.7: {
    passagens: [],
    entreRolos: [
      -1, 6, -1, 2, -1, 2, -1, 2, 0.5, 1.2, 0.8, 1.2, 0, 1, 3.2, 1, 1.4, 0.6,
      1.2, 0.6, 1.2, 0.6, 0.5, 3, 3, 3, 3,
    ],
  },
  15.87: {
    passagens: [],
    entreRolos: [
      -1, 13, -1, 7, -1, 3, -1, 2, 0.5, 1.2, 0.8, 1.2, 0, 1, 4, 1, 1.6, 0.6,
      1.6, 0.6, 1.6, 0.6, 0.5, 3, 3, 3, 3,
    ],
  },
  19.05: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
    ],
    entreRolos: [
      -1, 21, -1, 13, -1, 5, -1, 2.4, 0.6, 1.6, 0.8, 1.6, 0, 1, 4.8, 1, 1.6,
      0.6, 1.6, 0.6, 1.6, 0.6, 0.5, 0.5, 3, 3, 3, 3,
    ],
  },
  20.7: {
    passagens: [{ nome: "22A x2", superior: { nome: "22B x2" } }],
    entreRolos: [
      -1, 25, -1, 16, -1, 6, -1, 2.8, 0.7, 2, 0.8, 1.6, 0, 1, 4.8, 1, 2, 0.6, 2,
      0.6, 2, 0.6, 0.5, 3, 3, 3, 3,
    ],
  },
  21.3: {
    passagens: [],
    entreRolos: [
      -1, 26, -1, 17, -1, 6, -1, 2.8, 0.8, 2, 1, 1.6, 0, 1, 5.2, 1, 2, 0.6, 2,
      0.6, 2, 0.6, 0.5, 3, 3, 3, 3,
    ],
  },
  22.22: {
    passagens: [],
    entreRolos: [
      -1, 28, -1, 18, -1, 6, -1, 2.8, 0.8, 2, 1, 1.6, 0, 1, 5.2, 1, 2, 0.6, 2,
      0.6, 2, 0.6, 0.5, 3, 3, 3, 3,
    ],
  },
  25.4: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "25a x2", superior: { nome: "25b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
      { nome: "28A x2", superior: { nome: "28B x2" } },
      { nome: "29A x2", superior: { nome: "29B x2" } },
    ],
    entreRolos: [
      -1, 36, -1, 24, -1, 8, -1, 3.2, 0.8, 2, 1, 2, 0, 2, 6, 1, 2, 0.8, 2, 0.8,
      2, 0.8, 0.5, 0.5, 0.5, 0.5, 3, 3, 3, 3,
    ],
  },
  26.9: {
    passagens: [],
    entreRolos: [
      -1, 40, -1, 26, -1, 10, -1, 4, 0.8, 2, 1, 2, 0, 2, 6.4, 1, 2.4, 0.8, 2.4,
      0.8, 2.4, 0.8, 0.5, 3, 3, 3, 3,
    ],
  },
  28.6: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
    ],
    entreRolos: [
      -1, 44, -1, 28, -1, 10, -1, 4, 0.8, 2, 1, 2.2, 0, 2, 6.8, 1, 2.4, 0.8,
      2.4, 0.8, 2.4, 0.8, 0.5, 0.5, 3, 3, 3, 3,
    ],
  },
  31.75: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "25a x2", superior: { nome: "25b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
      { nome: "28A x2", superior: { nome: "28B x2" } },
      { nome: "29A x2", superior: { nome: "29B x2" } },
    ],
    entreRolos: [
      -1, 52, -1, 34, -1, 14, -1, 4, 1, 2.2, 1, 2.2, 0, 2, 7.6, 1, 2.8, 0.8,
      2.8, 0.8, 2.8, 0.8, 0.5, 0.5, 0.5, 0.5, 3, 3, 3, 3,
    ],
  },
  33.7: {
    passagens: [],
    entreRolos: [
      -1, 56, -1, 36, -1, 14, -1, 6, 1, 2.2, 1, 2.4, 0, 2, 8, 1, 2.8, 0.8, 2.8,
      0.8, 2.8, 0.8, 1, 3, 3, 3, 3,
    ],
  },
  34.92: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "25a x2", superior: { nome: "25b x2" } },
      { nome: "26a x2", superior: { nome: "26b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
    ],
    entreRolos: [
      -1, 60, -1, 38, -1, 16, -1, 6, 1, 2.2, 1, 2.4, 0, 2, 8, 1, 2.8, 0.8, 2.8,
      0.8, 2.8, 0.8, 1, 1, 1, 1, 1, 3, 3, 3, 3,
    ],
  },
  38.1: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
      { nome: "28A x2", superior: { nome: "28B x2" } },
    ],
    entreRolos: [
      -1, 66, -1, 42, -1, 18, -1, 8, 1.2, 2.4, 1, 2.6, 0, 2, 8.8, 1, 3.2, 0.8,
      3.2, 0.8, 3.2, 0.8, 1, 1, 1, 3, 3, 3, 3,
    ],
  },
  41.27: {
    passagens: [],
    entreRolos: [
      -1, 74, -1, 48, -1, 22, -1, 8, 1.2, 2.4, 1, 2.6, 0, 2, 9.6, 1, 3.2, 0.8,
      3.2, 0.8, 3.2, 0.8, 1, 3, 3, 3, 3,
    ],
  },
  44.45: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "25a x2", superior: { nome: "25b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
      { nome: "28A x2", superior: { nome: "28B x2" } },
      { nome: "29A x2", superior: { nome: "29B x2" } },
    ],
    entreRolos: [
      -1, 82, -1, 52, -1, 24, -1, 10, 1.2, 2.6, 1, 2.8, 0, 2, 10.4, 1, 3.6, 1,
      3.6, 1, 3.6, 1, 1, 1, 1, 1, 3, 3, 3, 3,
    ],
  },
  47.6: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
      { nome: "28A x2", superior: { nome: "28B x2" } },
    ],
    entreRolos: [
      -1, 90, -1, 58, -1, 26, -1, 12, 1.2, 3, 1, 2.8, 0, 2, 10.8, 1, 3.6, 1,
      3.6, 1, 3.6, 1, 1, 1, 1, 3, 3, 3, 3,
    ],
  },
  50.8: {
    passagens: [
      { nome: "23a x2", superior: { nome: "23b x2" } },
      { nome: "24a x2", superior: { nome: "24b x2" } },
      { nome: "25a x2", superior: { nome: "25b x2" } },
      { nome: "26a x2", superior: { nome: "26b x2" } },
      { nome: "27A x2", superior: { nome: "27B x2" } },
      { nome: "28A x2", superior: { nome: "28B x2" } },
      { nome: "29A x2", superior: { nome: "29B x2" } },
    ],
    entreRolos: [
      -1, 96, -1, 62, -1, 30, -1, 12, 1.2, 3, 1, 3, 0, 2, 11.6, 1, 4, 1, 4, 1,
      4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3,
    ],
  },
};

export const ferramentas = [
  ...new Map(
    Object.values(entreRolos)
      .flatMap(({ passagens }) => passagensBase.concat(passagens))
      .map((i) => [i.nome, i])
  ).values(),
].flatMap(({ superior, inferior, lateral }) => {
  const l = [];
  if (superior) l.push(superior);
  if (inferior) l.push(inferior);
  if (lateral) l.push(lateral);
  return l;
});

export const bitolas = Object.entries(entreRolos).map(
  ([bitola, { passagens: p, entreRolos: e }], _) => {
    const passagens = passagensBase.concat(p);
    return {
      tamanho: parseFloat(bitola),
      passagens: {
        create: passagens.map((v, i) => ({
          nome: v.nome,
          ...(v.superior && {
            superior: { connect: { nome: v.superior.nome } },
          }),
          ...(v.inferior && {
            inferior: { connect: { nome: v.inferior.nome } },
          }),
          ...(v.lateral && {
            lateral: { connect: { nome: v.lateral.nome } },
          }),
          entreRolos: e[i],
        })),
      },
    };
  }
);
