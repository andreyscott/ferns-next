import axios from "axios";
import FirstMain from "../components/Home/FirstMain/FirstMain";
import MainSwiper from "../components/Home/MainSwiper/MainSwiper";
import SecMain from "../components/Home/SecMain/SecMain";
import SecSwiper from "../components/Home/SecSwiper/SecSwiper";
import TriMain from "../components/Home/TriMain/TriMain";

const FirstHome = ({ productList }) => {
  return (
    <>
      <MainSwiper />
      <SecSwiper />
      <FirstMain productList={productList} />
      <SecMain />
      <TriMain />
    </>
  );
};

export default FirstHome;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  // ("https://course-api.com/react-store-products");
  // console.log(res.data);

  // const response = await fetch("https://course-api.com/react-store-products");
  // if (!response.ok) throw new Error("Problem Getting Data");
  // const data = await response.json();
  
  return {
    props: {
      productList: response.data,
    },

  };
};
