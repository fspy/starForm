import { useFormContext } from "react-hook-form";
import { Formadora as TFormadora } from "../../graphql/graphql";

export function Formadora({ data: formadoras }: { data: TFormadora[] }) {
  const { register } = useFormContext();
  return (
    <select {...register("formadora")}>
      <option value="-1">Formadora</option>
      {formadoras?.map((f) => (
        <option key={`formadora-${f.id}`} value={f.id}>
          {f.nome}
        </option>
      ))}
    </select>
  );
}
