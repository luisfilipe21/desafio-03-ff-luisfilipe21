import { z } from "zod";


export const formSchema = z.object({
    nome: z.string().min(2, {message: "Este campo é obrigatório, mínimo de 2 caracteres"}),
    email: z.string().email({message: "E-mail inválido"}).min(1),
    assunto: z.string().min(1, {message: "Este campo é obrigatório"}),
    mensagem: z.string().min(1, {message: "Este campo é obrigatório"})
})