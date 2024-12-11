import Nav from "./Nav";

const Header = () => {
  return (
    <header className=" flex flex-col justify-center items-center bg-blue-500 text-white p-6 shadow-lg">
      <div className="flex justify-center flex-col p-4">
        <h1 className="text-3xl font-bold md:text-4xl">Orient Express</h1>
        <h3 className="mt-2 text-lg md:text-xl italic">Samopostrežna restavracija</h3>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
