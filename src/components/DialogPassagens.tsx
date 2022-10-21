import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Passagem } from "../global";

interface DialogProps {
  open: boolean;
  selectedValue: number;
  onClose: (value: number) => void;
  passagens: Passagem[];
}

export default function DialogPassagens(props: DialogProps) {
  const { onClose, selectedValue, passagens, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: number) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Selecione a passagem</DialogTitle>
      <List sx={{ pt: 0 }}>
        {passagens.map(({ superior: { nome } }, i) => (
          <ListItem button onClick={() => handleListItemClick(i + 1)} key={i}>
            <ListItemText primary={nome} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
