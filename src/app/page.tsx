import Footer from "./components/Footer";
import Header from "./components/Header";
import Ponudba from "./components/Ponudba";
import Info from "./components/Info";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <> 
    <Header></Header>
      <main className="text-center p-6">
        <Ponudba></Ponudba>
        <Menu></Menu>
        <Info></Info>
      </main>
    <Footer></Footer>
    </>
  );
}
