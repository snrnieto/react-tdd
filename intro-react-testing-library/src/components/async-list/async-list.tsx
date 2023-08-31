import { useEffect, useState } from "react";

const foodList: string[] = ["Hamburger", "Pizza", "Tacos"];

const fakeApiCall = (): Promise<string[]> =>
  new Promise((resolve) => setTimeout(() => resolve(foodList), 500));

export default function AsyncList(): JSX.Element {
  const [foodData, setFoodData] = useState<string[]>([]);

  useEffect(() => {
    fakeApiCall().then((data) => {
      setFoodData(data);
    });
  }, []);

  return (
    <div>
      {foodData.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}
