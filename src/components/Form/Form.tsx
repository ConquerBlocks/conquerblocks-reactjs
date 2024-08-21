import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "./components/InputForm/InputForm";
import { FormValues, schema } from "../../models";


const MyForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <InputField
      name="name"
      control={control}
      label="Nombre"
      type="text"
      error={errors.name}
    />

    <InputField
      name="email"
      control={control}
      label="Email"
      type="email"
      error={errors.email}
    />

    <InputField
      name="password"
      control={control}
      label="Password"
      type="password"
      error={errors.password}
    />

    <InputField
      name="confirmPassword"
      control={control}
      label="Confirm Password"
      type="password"
      error={errors.confirmPassword}
    />

    <button type="submit">Enviar</button>
  </form>)
}

export default MyForm;
