import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../graphql";

const endpoint = "/api/graphql";

const formadorasQuery = graphql(`
  query Formadoras {
    formadoras {
      id
      nome
      bitolas {
        id
        tamanho
      }
    }
  }
`);

async function fetchFormadoras() {
  const { formadoras } = await request(endpoint, formadorasQuery);
  return formadoras;
}

function useFormadoras() {
  return useQuery(["formadoras"], () => fetchFormadoras());
}

export { useFormadoras, fetchFormadoras };
