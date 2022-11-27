import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../graphql";

const endpoint = "http://localhost:3000/api/graphql";

function useFormadoras() {
  return useQuery(["formadoras"], async () => {
    const { formadoras } = await request(
      endpoint,
      graphql(`
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
      `)
    );
    return formadoras;
  });
}

export { useFormadoras };
