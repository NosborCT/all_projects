"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 caracteres"),
});
const CadastroPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert("Os valores dos campos estão sendo salvos em json por enquanto...")
    console.log(values);
    form.reset();
  }

  return (
    <div className="  min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center  ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className=" hover:shadow-lg transition-shadow duration-300 mx-auto w-[27.5rem] h-[32.5rem]">
            <CardTitle className=" font-bold text-3xl mt-10 flex items-center justify-center ">
              Criar uma conta
            </CardTitle>
              <p className=" flex items-center justify-center mb-10"> Já possui uma conta ? <a className=" text-blue-700" href="/pages/login"> Log in</a> </p>
            <CardContent >
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel   >Nome de Usuário </FormLabel>
                    <FormControl>
                      <Input   {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>telefone </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className=" flex items-center justify-center " >
              <Button   type="submit">
                Cadastrar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default CadastroPage;
