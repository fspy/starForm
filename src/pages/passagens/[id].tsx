import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Ferramenta as TFerramenta, Passagem } from "../../graphql/graphql";
import { fetchPassagens } from "../../hooks";
import styles from "../../styles/Home.module.css";

function Passagens() {
  const router = useRouter();
  const [passagens, setPassagens] = useState<Passagem[]>([]);
  const [passagemAtual, setPassagemAtual] = useState(0);

  useEffect(() => {
    const getPassagens = async (id: number) => {
      const data = await fetchPassagens(id);
      setPassagens(data as Passagem[]);
    };
    if (router.isReady) {
      const id = router.query.id as string;
      getPassagens(Number(id)).catch(console.error);
    }
  }, [router.isReady, router.query.id]);

  const p = () => passagens[passagemAtual];
  if (!p()) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.grid}>
      <div className={styles.main}>
        <button
          className={styles.description}
          onClick={() => setPassagemAtual(passagemAtual - 1)}
          disabled={passagemAtual == 0}
        >
          ⬆
        </button>
        <button className={styles.description} onClick={() => router.push("/")}>
          ⬅
        </button>
        <button
          className={styles.description}
          onClick={() => setPassagemAtual(passagemAtual + 1)}
          disabled={passagemAtual == passagens?.length - 1}
        >
          ⬇
        </button>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Passagem {p().nome}</h1>
        {p().lateral && (
          <Ferramenta {...(p().lateral as TFerramenta)} pos="lateral" />
        )}
        {p().superior && (
          <Ferramenta {...(p().superior as TFerramenta)} pos="superior" />
        )}
        {p().inferior && (
          <Ferramenta {...(p().inferior as TFerramenta)} pos="inferior" />
        )}
        <p>
          Entre Rolos:{" "}
          {p().entreRolos === -1 ? "Espessura" : `${p().entreRolos} mm`}
        </p>
      </div>
    </div>
  );
}

const Ferramenta = (data: TFerramenta & { pos: string }) => {
  const { id, nome, fundo, frente, pos } = data;
  return (
    <div className={styles.card}>
      <h2>
        {pos.toUpperCase()} - {nome}
      </h2>
      {pos !== "lateral" && (
        <>
          <p>Fundo: {fundo}</p>
          <p>Frente: {frente}</p>
        </>
      )}
      {/* <small>{id}</small> */}
    </div>
  );
};

export default Passagens;
