import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../graphql";

const endpoint = "/api/graphql";

const passagensWithBitolaQuery = graphql(`
  query passagensWithBitola($bitolaId: Int!) {
    passagens(bitolaId: $bitolaId) {
      id
      nome
      entreRolos
      superior {
        ...ferramenta
      }
      inferior {
        ...ferramenta
      }
      lateral {
        ...ferramenta
      }
    }
  }

  fragment ferramenta on Ferramenta {
    id
    nome
    frente
    fundo
  }
`);

async function fetchPassagens(bitolaId: number) {
  const { passagens } = await request(endpoint, passagensWithBitolaQuery, {
    bitolaId,
  });
  return passagens;
}

function usePassagens({ bitolaId }: { bitolaId: number }) {
  return useQuery(["passagens", bitolaId], () => fetchPassagens(bitolaId));
}

export { usePassagens, fetchPassagens };
