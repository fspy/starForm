import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  name: string;
  value: string;
  handler: (e: SelectChangeEvent) => void;
  data?: number[];
  children?: React.ReactNode;
}

export default function Select({
  name,
  value,
  handler,
  data,
  children,
}: SelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{name}</InputLabel>
      <MuiSelect
        id={name}
        name={name}
        labelId={`${name}-label`}
        value={value}
        label={name}
        onChange={handler}
        MenuProps={{ style: { maxHeight: "50%" } }}
      >
        {/* <MenuItem value="" disabled>
          Selecione
        </MenuItem> */}
        {data &&
          data.map((v, i) => (
            <MenuItem key={`data.${i}`} value={v}>
              {v} mm
            </MenuItem>
          ))}
        {children}
      </MuiSelect>
    </FormControl>
  );
}
