import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Bin2Dec = () => {
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função de conversão
  const convert = () => {
    // Verifica se a entrada contém apenas 0s e 1s
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Digite apenas 0 ou 1");
      return;
    }

    setErrorMessage(""); // Reset na mensagem de erro

    // Converte o texto binário para um array de números invertidos
    const reversedBinaryText = binaryText
      .split("")
      .map(Number)
      .reverse();

    // Calcula o número decimal
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx),
      0
    );

    setDecimalText(result);
  };

  return (
    <main className="max-w-3xl w-full p-7 bg-[#053D39]">
      <div className="flex flex-col items-center">
        <h1 className="text-[#f7f7f7] text-3xl">
          Conversão de Binário para Decimal
        </h1>
      </div>

      <div className="flex text-[#f7f7f7] flex-col items-center mt-10">
        <div className="flex items-center w-full max-w-md space-x-2">
          <Input
            type="text"
            id="binaryInput"
            placeholder="Digite o número binário"
            value={binaryText}
            onChange={(e) => setBinaryText(e.target.value)}
          />
          <Button
            onClick={convert}
            className="transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg"
            type="button"
          >
            Converter
          </Button>
        </div>

        {errorMessage && (
          <span className="text-red-500 mt-2">{errorMessage}</span>
        )}

        <div className="max-w-md w-full mt-5">
          <Input
            type="text"
            placeholder="Resultado"
            value={decimalText}
            readOnly
            className="w-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Bin2Dec;
