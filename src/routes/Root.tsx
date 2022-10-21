import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Button, Grid, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

import Select from "../components/Select";

import { useNavigate } from "react-router-dom";

const thk = [
  12.7, 15.87, 19.05, 20.7, 21.3, 22.22, 25.4, 26.9, 28.6, 31.75, 33.7, 34.92,
  38.1, 41.27, 44.45, 47.6, 50.8,
];

export default function Root() {
  const navigate = useNavigate();
  const [maquina, setMaquina] = useState("");
  const [bitola, setBitola] = useState("");

  const handleMaquina = (e: SelectChangeEvent) => {
    setMaquina(e.target.value as string);
  };
  const handleBitola = (e: SelectChangeEvent) => {
    setBitola(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/montagem/${maquina}/${bitola}`, { state: { maquina, bitola } });
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3, minWidth: "80%" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Select name="Máquina" handler={handleMaquina} value={maquina}>
              <MenuItem value="itl50">ITL-50</MenuItem>
              <MenuItem value="itl100">ITL-100</MenuItem>
              <MenuItem value="itl150">ITL-150</MenuItem>
              <MenuItem value="itl200">ITL-200</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Select
              name="Bitola"
              handler={handleBitola}
              value={bitola}
              data={thk}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 3, mb: 2 }}
          disabled={!maquina || !bitola}
          endIcon={<ArrowForwardRounded />}
        >
          Iniciar
        </Button>
      </Box>
    </>
  );
}
