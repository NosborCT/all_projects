"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Bin2Dec = () => {
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função de conversão
  const convert = () => {
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Digite apenas 0 ou 1");
      return;
    }

    setErrorMessage(""); // Reset na mensagem de erro

    const reversedBinaryText = binaryText.split("").map(Number).reverse();

    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx),
      0
    );

    setDecimalText(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main>
        <Card className="col-span-1 md:col-span-2 mt-10">
          <CardContent>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl p-7 font-bold  text-center text-gray-900 dark:text-white">
                Conversão de Binário para Decimal
              </h1>
            </div>

            <div className="flex flex-col items-center font-semibold text-gray-900 dark:text-white">
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
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Bin2Dec;
