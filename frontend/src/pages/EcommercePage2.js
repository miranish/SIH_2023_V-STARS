import { EcommercePage2Card } from "../components/EcommercePage2Card";
import "../styles/EcommercePage2.css";

export const TradePage2 = () => {
  const IndiaStates = [
    {
      id: 1,
      name: "Andhra Pradesh",
      population: 53903393,
    },
    {
      id: 2,
      name: "Arunachal Pradesh",
      population: 1570458,
    },
    {
      id: 3,
      name: "Assam",
      population: 35607039,
    },
    {
      id: 4,
      name: "Bihar",
      population: 124799926,
    },
    {
      id: 5,
      name: "Chhattisgarh",
      population: 29436231,
    },
    {
      id: 6,
      name: "Goa",
      population: 1547533,
    },
    {
      id: 7,
      name: "Gujarat",
      population: 60439692,
    },
    {
      id: 8,
      name: "Haryana",
      population: 25351462,
    },
    {
      id: 9,
      name: "Himachal Pradesh",
      population: 730703,
    },
    {
      id: 10,
      name: "Jharkhand",
      population: 32988134,
    },
    {
      id: 11,
      name: "Karnataka",
      population: 61095297,
    },
    {
      id: 12,
      name: "Kerala",
      population: 33406061,
    },
    {
      id: 13,
      name: "Madhya Pradesh",
      population: 72626809,
    },
    {
      id: 14,
      name: "Maharashtra",
      population: 112374333,
    },
    {
      id: 15,
      name: "Manipur",
      population: 3091545,
    },
    {
      id: 16,
      name: "Meghalaya",
      population: 2964007,
    },
    {
      id: 17,
      name: "Mizoram",
      population: 1091014,
    },
    {
      id: 18,
      name: "Nagaland",
      population: 1978502,
    },
    {
      id: 19,
      name: "Odisha",
      population: 41974219,
    },
    {
      id: 20,
      name: "Punjab",
      population: 27743338,
    },
    {
      id: 21,
      name: "Rajasthan",
      population: 68548437,
    },
    {
      id: 22,
      name: "Sikkim",
      population: 610577,
    },
    {
      id: 23,
      name: "Tamil Nadu",
      population: 72147030,
    },
    {
      id: 24,
      name: "Telangana",
      population: 35003674,
    },
    {
      id: 25,
      name: "Tripura",
      population: 3671032,
    },
    {
      id: 26,
      name: "Uttar Pradesh",
      population: 224979000,
    },
    {
      id: 27,
      name: "Uttarakhand",
      population: 11141000,
    },
    {
      id: 28,
      name: "West Bengal",
      population: 91276115,
    },
  ];

  return (
    <div className="eco-page2">
      <div className="eco-page2-cards-container">
        {IndiaStates.map((state) => (
          <EcommercePage2Card title={state.name} key={state.id} popularity={state.population}/>
        ))}
      </div>
    </div>
  );
};
