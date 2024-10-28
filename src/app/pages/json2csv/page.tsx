"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Json2Csv = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [csvOutput, setCsvOutput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Tenta converter o JSON de entrada para um CSV.
   * Se der sucesso, atualiza o estado do componente com o CSV gerado e limpa
   * a mensagem de erro. Caso contrário, atualiza o estado com uma mensagem de
   * erro e limpa o resultado CSV.
   */
  const convertJsonToCsv = () => {
    try {
      // Tenta converter o JSON de entrada
      const jsonData = JSON.parse(jsonInput);

      // Verifica se jsonData é um array
      if (!Array.isArray(jsonData)) {
        throw new Error("O JSON deve ser um array de objetos.");
      }

      // Extrai cabeçalhos (as chaves do primeiro objeto)
      const headers = Object.keys(jsonData[0]);
      const csvRows = [headers.join(",")]; // Cabeçalhos como primeira linha

      // Converte cada objeto para uma linha CSV
      jsonData.forEach((obj) => {
        const values = headers.map((header) => JSON.stringify(obj[header] || ""));
        csvRows.push(values.join(","));
      });

      // Atualiza o resultado CSV
      setCsvOutput(csvRows.join("\n"));
      setErrorMessage(""); // Limpa mensagem de erro

    } catch (error) {
      setErrorMessage("Formato JSON inválido ou vazio.");
      setCsvOutput("");
    }
  };

  /**
   * Gera um link para download do resultado CSV.
   * Cria um blob com o conteúdo do resultado CSV, converte-o em uma URL
   * objeto e cria um link para download. Após o download, a URL é revogada.
   */
  const downloadCsv = () => {
    const blob = new Blob([csvOutput], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "output.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="max-w-3xl w-full p-7 bg-[#053D39]">
      <div className="flex flex-col items-center">
        <h1 className="text-[#f7f7f7] text-3xl">Conversão de JSON para CSV</h1>
      </div>

      <div className="flex text-[#f7f7f7] flex-col items-center mt-10">
        <div className="flex flex-col w-full max-w-md space-y-4">
          <Textarea
            id="jsonInput"
            placeholder="Digite o JSON"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="resize-y" // Permite redimensionamento vertical
          />
          <Button
            onClick={convertJsonToCsv}
            className="transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg"
            type="button"
          >
            Converter
          </Button>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        </div>

        <div className="max-w-md w-full mt-5">
          <Input
            type="text"
            placeholder="Resultado em CSV"
            value={csvOutput}
            readOnly
            className="w-full"
          />
          {csvOutput && (
            <Button
              onClick={downloadCsv}
              className="mt-4 transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg"
              type="button"
            >
              Baixar CSV
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Json2Csv;