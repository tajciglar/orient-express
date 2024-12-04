import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <> 
    <Header></Header>
      <main className="text-center p-6">
      <h1 className="text-4xl font-bold">Restavracija Orient Express</h1>
      <p className="mt-4 text-lg">Check out this week&apos;s menu below!</p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">This Week&apos;s Menu</h2>
        <ul className="mt-4 space-y-2">
          <li>🍔 Cheeseburger</li>
          <li>🍕 Margherita Pizza</li>
          <li>🥗 Caesar Salad</li>
        </ul>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}
