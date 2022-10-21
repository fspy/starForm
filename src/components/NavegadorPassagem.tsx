import {
  ArrowBackIosNewRounded as ArrowPrev,
  ArrowForwardIosRounded as ArrowNext,
  KeyboardArrowUpRounded as ArrowUp,
} from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Passagem } from "../global";
import DialogPassagens from "./DialogPassagens";

interface NavegadorProps {
  idx: number;
  passagens: Passagem[];
  set: Dispatch<SetStateAction<number>>;
}

export default function NavegadorPassagem(props: NavegadorProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const navigate = useNavigate();
  const { idx, passagens, set } = props;

  const handleBack = (e: React.MouseEvent<HTMLElement>) => {
    if (idx === 1) {
      return navigate("/");
    }
    return set(idx - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: number) => {
    setOpen(false);
    setSelectedValue(value);
    set(value);
  };

  return (
    <Grid container justifyContent={"space-evenly"} alignItems={"flex-end"}>
      <Grid xs={12} textAlign="center">
        <Button onClick={handleClickOpen}>
          <ArrowUp
            sx={{ fontSize: 50, marginBottom: -2.5, opacity: 0.5 }}
            color="warning"
          />
        </Button>
        <DialogPassagens
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          passagens={passagens}
        />
      </Grid>
      <Grid xs={4}>
        <Button onClick={handleBack}>
          <ArrowPrev
            sx={{ fontSize: 50 }}
            color={idx === 1 ? "disabled" : "info"}
          />
        </Button>
      </Grid>
      <Grid xs={4} textAlign="center">
        <Typography variant="overline">Passagem</Typography>
        <Typography
          component="h1"
          variant="h3"
          textAlign={"center"}
          mt="-0.5rem"
          fontWeight={700}
        >
          {idx}
        </Typography>
      </Grid>
      <Grid xs={4} textAlign="right">
        <Button
          onClick={() => set(idx + 1)}
          disabled={idx === passagens.length}
        >
          <ArrowNext
            sx={{ fontSize: 50 }}
            color={idx === passagens.length ? "disabled" : "info"}
          />
        </Button>
      </Grid>
    </Grid>
  );
}
