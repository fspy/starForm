import { useFormContext } from "react-hook-form";
import { Bitola as TBitola } from "../../graphql/graphql";

export function Bitola({ data: bitolas }: { data: TBitola[] }) {
  const { register } = useFormContext();
  return (
    <select {...register("bitola")}>
      <option value="-1">Bitola</option>
      {bitolas?.map((b) => (
        <option key={`bitola-${b.id}`} value={b.id}>
          {b.tamanho.toFixed(2)} mm
        </option>
      ))}
    </select>
  );
}
