import { Control, Controller, FieldError } from "react-hook-form";
import './InputForm.css'
import { FormValues } from "../../../../models";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputField = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input id={name} type={type} className={`form-control ${error ? 'in-invalid' : ''}`} {...field} />}
      ></Controller>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  )
}

export default InputField
