/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
  strYoutube: string;
}

const MealGeneration = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const FetchRandomMeal = async () => {
    setLoading(true);
    setMeal(null);
    setError("");

    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      if (data.meals) {
        setMeal(data.meals[0]);
      } else {
        setError("Não foi possível carregar a receita.");
      }
    } catch  {
      setError("Erro ao buscar a receita.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main>
        <Card className="col-span-1 md:col-span-2 mt-10">
          <CardContent>
            <h1 className="text-3xl font-bold text-white mb-10">
              Receitas Aleatórias
            </h1>
            <div className="flex justify-center mb-6">
              <Button
                className="flex items-center justify-center"
                onClick={FetchRandomMeal}
              >
                Gerar uma receita Aleatória
              </Button>
            </div>

            {loading && (
              <p className="text-center text-2xl mt-4">Carregando...</p>
            )}
            {error && (
              <p className="text-red-500 text-center text-xl mt-4">{error}</p>
            )}
            {meal && (
              <div className="meal p-5 rounded-lg text-center max-w-[1024px] max-h-full mx-auto">
                <div className="flex flex-grow items-center justify-center">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="mb-4 rounded-lg max-w-xs"
                  />
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold ml-2 mr-2">
                      Food Name: <h2>{meal.strMeal}</h2>
                    </h2>
                    <h2 className="text-xl font-bold mb-4"> </h2>
                    <p className="text-md mb-2">
                      <p className="font-semibold text-lg">Category:</p>
                      {meal.strCategory}{" "}
                    </p>
                    <p className="text-md mb-2">
                      <p className="font-semibold text-lg">Country:</p>
                      {meal.strArea}{" "}
                    </p>

                    {meal.strTags && (
                      <p className="text-sm mb-2">
                        Tags: {meal.strTags.split(",").join(", ")}
                      </p>
                    )}
                  </div>
                </div>
                <Separator />
                <p className="text-sm leading-relaxed">
                  <h3 className="text-2xl">Step by step: </h3>
                  {meal.strInstructions}
                </p>
                {meal.strYoutube && (
                  <div className="videoWrapper mt-6">
                    <iframe
                      className="w-full h-[360px] sm:h-[480px] md:h-[540px] lg:h-[600px] max-w-full"
                      src={`https://www.youtube.com/embed/${meal.strYoutube.split(
                        "v="
                      )[1]}`}
                      title="Video de Receita"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MealGeneration;
