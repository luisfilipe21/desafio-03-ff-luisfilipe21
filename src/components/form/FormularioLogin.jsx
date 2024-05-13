import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../inputs/Input";
import { formSchema } from "./formSchema";

export const FormularioLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    const submit = (data) => {
        console.log(data);

    }

    return (
        <section className=" p-8 h-svh max-w-5xl m-auto">
            <div className="min-h-full flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-lg w-96">
                    <h2 className="text-2xl font-semibold mb-6">Formulário</h2>
                    <form className="flex flex-col justify-center h-full"
                        onSubmit={handleSubmit(submit)}>

                        <Input type="text" placeholder="Nome" label="Nome" {...register("nome")} errors={errors.nome} />

                        <Input type="text" placeholder="E-mail" label="E-mail" {...register("email")} errors={errors.email} />

                        <Input type="text" placeholder="Assunto" label="Assunto" {...register("assunto")} errors={errors.assunto} />

                        <Input type="text" placeholder="Mensagem" label="Mensagem" {...register("mensagem")} errors={errors.mensagem} />

                        <button type="submit" alt="submit" className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-600">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}