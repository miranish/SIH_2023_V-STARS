import { EcommercePage2Card } from "../components/EcommercePage2Card";
import EcoNavbar from "../components/Navbar";
import "../styles/EcommercePage2.css";

export const TradePage2 = () => {
  const IndiaStates = [
    {
      id: 1,
      name: "Andhra Pradesh",
      images: ["https://i.pinimg.com/564x/6c/f0/6a/6cf06aa3fc50889a082172692ba33995.jpg", "https://i.pinimg.com/564x/da/27/8e/da278e164e4523e53f664afe6c06c80b.jpg"],
      population: 53903393,
    },
    {
      id: 2,
      name: "Arunachal Pradesh",
      images: ["https://i.pinimg.com/564x/2f/81/79/2f81796248dd7f4c1c093deaf66d5cf6.jpg", "https://i.pinimg.com/564x/53/af/e0/53afe0f4d7f9fff8f67b8eb255e3fb18.jpg"],
      population: 1570458,
    },
    {
      id: 3,
      name: "Assam",
      images: ["https://i.pinimg.com/564x/0b/db/7d/0bdb7dbba7c3fc22c141463605b5b38c.jpg", "https://i.pinimg.com/564x/74/d0/9b/74d09b25a50d0a37c6a9db6b765b6595.jpg"],
      population: 35607039,
    },
    {
      id: 4,
      name: "Bihar",
      images: ["https://i.pinimg.com/564x/6c/b1/88/6cb18808a0abae534428d74bb8b4bda8.jpg", "https://i.pinimg.com/736x/47/95/5f/47955fd8872c3e3768679cd886011478.jpg"],
      population: 124799926,
    },
    {
      id: 5,
      name: "Chhattisgarh",
      images: ["https://content.jdmagicbox.com/comp/raipur-chhattisgarh/a9/9999px771.x771.190226124255.e6a9/catalogue/amrita-s-fancy-dresses-on-rent-purani-basti-raipur-raipur-chhattisgarh-boutiques-8vcex81j4u.jpg", "https://i.pinimg.com/564x/94/b7/ed/94b7ed14a45521e9dda38074dda70998.jpg"],
      population: 29436231,
    },
    {
      id: 6,
      name: "Goa",
      images: ["https://placehold.co/400x600", "https://placehold.co/400x600"],
      population: 1547533,
    },
    {
      id: 7,
      name: "Gujarat",
      images: ["https://i.pinimg.com/originals/e6/6b/d9/e66bd9a38983f68953b1ef014ca4ef14.jpg", "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F682%2Fcomfortable-girls-wear-the-traditional-wedding-gujarati-saree-815.jpg&w=750&q=75"],
      population: 60439692,
    },
    {
      id: 8,
      name: "Haryana",
      images: ["https://5.imimg.com/data5/SELLER/Default/2023/3/ZG/BN/HT/14623766/haryanvi-boy-dress-for-kids-and-adult-500x500.jpg", "https://5.imimg.com/data5/YJ/DI/OA/SELLER-68453253/haryana-folk-dance-costume.jpg"],
      population: 25351462,
    },
    {
      id: 9,
      name: "Himachal Pradesh",
      images: ["https://icharchive.intach.org/providence/media/collectiveaccess/images/1/4/36201_ca_object_representations_media_1455_medium.jpg", "https://i.pinimg.com/736x/f7/43/5f/f7435ff71811f62b6dd8a6dc9f584452.jpg"],
      population: 730703,
    },
    {
      id: 10,
      name: "Jharkhand",
      images: ["", ""],
      population: 32988134,
    },
    {
      id: 11,
      name: "Karnataka",
      images: ["", ""],
      population: 61095297,
    },
    {
      id: 12,
      name: "Kerala",
      images: ["", ""],
      population: 33406061,
    },
    {
      id: 13,
      name: "Madhya Pradesh",
      images: ["", ""],
      population: 72626809,
    },
    {
      id: 14,
      name: "Maharashtra",
      images: ["", ""],
      population: 112374333,
    },
    {
      id: 15,
      name: "Manipur",
      images: ["", ""],
      population: 3091545,
    },
    {
      id: 16,
      name: "Meghalaya",
      images: ["", ""],
      population: 2964007,
    },
    {
      id: 17,
      name: "Mizoram",
      images: ["", ""],
      population: 1091014,
    },
    {
      id: 18,
      name: "Nagaland",
      images: ["", ""],
      population: 1978502,
    },
    {
      id: 19,
      name: "Odisha",
      images: ["", ""],
      population: 41974219,
    },
    {
      id: 20,
      name: "Punjab",
      images: ["", ""],
      population: 27743338,
    },
    {
      id: 21,
      name: "Rajasthan",
      images: ["", "https://i.pinimg.com/564x/5a/db/e1/5adbe18c53993ef87892043fff562751.jpg"],
      population: 68548437,
    },
    {
      id: 22,
      name: "Sikkim",
      images: ["", ""],
      population: 610577,
    },
    {
      id: 23,
      name: "Tamil Nadu",
      images: ["", ""],
      population: 72147030,
    },
    {
      id: 24,
      name: "Telangana",
      images: ["", ""],
      population: 35003674,
    },
    {
      id: 25,
      name: "Tripura",
      images: ["", ""],
      population: 3671032,
    },
    {
      id: 26,
      name: "Uttar Pradesh",
      images: ["", ""],
      population: 224979000,
    },
    {
      id: 27,
      name: "Uttarakhand",
      images: ["", ""],
      population: 11141000,
    },
    {
      id: 28,
      name: "West Bengal",
      images: ["", ""],
      population: 91276115,
    },
  ];

  return (
    <div className="eco-page2">
      <EcoNavbar />
      <div className="eco-page2-cards-container">
        {IndiaStates.map((state) => (
          <EcommercePage2Card
            key={state.id}
            title={state.name}
            images={state.images}
            popularity={state.population}
          />
        ))}
      </div>
    </div>
  );
};
