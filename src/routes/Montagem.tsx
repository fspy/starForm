import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import NavegadorPassagem from "../components/NavegadorPassagem";
import { Maquina } from "../global";

const ferramentaRegex: RegExp = /[0-9]+(?:T|B|L)-?([0-9]+)?$/;
const ferramentaFmt = (f: string | undefined) => {
  const m = f?.match(ferramentaRegex);
  return (
    <Typography>
      {m ? (
        <>
          <strong>{m[0]}</strong> {`(${m[1]} mm)`}
        </>
      ) : (
        "-"
      )}
    </Typography>
  );
};

export default function Montagem() {
  const [step, setStep] = useState(1);

  const maquinaData = useLoaderData() as Maquina;
  // let { state: { maquina, bitola } } = useLocation();

  // const maquina = "itl50";
  const bitola = "12.70";
  const passagens = maquinaData.passagens[bitola];
  const passagemAtual = maquinaData.passagens[bitola][step - 1];

  return (
    <>
      <Grid container justifyContent="center" columnSpacing={2} margin="0">
        <Grid xs={5} mb={2}>
          <Typography component="h2" variant="h5" textAlign="center">
            {maquinaData.nome}
          </Typography>
        </Grid>
        <Grid xs={7} mb={2}>
          <Typography component="h2" variant="h5" textAlign="center">
            &Phi; {bitola} mm
          </Typography>
        </Grid>

        <Grid xs={3} mt={2}>
          <Typography fontWeight="bold">Superior</Typography>
        </Grid>
        <Grid xs={9} mt={2}>
          <Typography fontWeight="bold" noWrap>
            Ferramenta {passagemAtual.superior.nome}
          </Typography>
        </Grid>

        <Grid xs={6}>Fundo</Grid>
        {/* <Grid xs={4}>{passagem.superior.centro && `Centro`}</Grid> */}
        <Grid xs={6} textAlign="right">
          Frente
        </Grid>

        <Grid xs={6}>{ferramentaFmt(passagemAtual.superior.fundo)}</Grid>
        {/* <Grid xs={4}>{ferramentaFmt(passagem.superior.centro)}</Grid> */}
        <Grid xs={6} textAlign="right">
          {ferramentaFmt(passagemAtual.superior.frente)}
        </Grid>

        <Grid xs={3} mt={2}>
          <Typography fontWeight="bold">Inferior</Typography>
        </Grid>
        <Grid xs={9} mt={2}>
          <Typography fontWeight="bold">
            Ferramenta {passagemAtual.inferior.nome}
          </Typography>
        </Grid>

        <Grid xs={6}>Fundo</Grid>
        {/* <Grid xs={4}>{passagem.superior.centro && `Centro`}</Grid> */}
        <Grid xs={6} textAlign="right">
          Frente
        </Grid>
        <Grid xs={6}>{ferramentaFmt(passagemAtual.inferior.fundo)}</Grid>
        {/* <Grid xs={4}>{ferramentaFmt(passagem.inferior.centro)}</Grid> */}
        <Grid xs={6} textAlign="right">
          {ferramentaFmt(passagemAtual.inferior.frente)}
        </Grid>
      </Grid>
      <NavegadorPassagem idx={step} passagens={passagens} set={setStep} />
    </>
  );
}
