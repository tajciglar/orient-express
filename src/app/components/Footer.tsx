const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <ul>
          <li>Kardiff d.o.o.</li>
          <li>Kolodvorska ulica 11, 1000 Ljubljana</li>
          <li>DŠ: SI98358391</li>
          <li>Matična številka: 5730082000</li>
        </ul>
        <ul className="text-right">
          <li>+ 386 70 594 566</li>
          <li>oe.kardiff@gmail.com</li>
          <li>pon - pet: 7:00 - 15:00</li>
          <li>sob - ned: zaprto</li>
        </ul>
      </div>
      <p className="text-center mt-4">
        &copy; {new Date().getFullYear()} Orient Express samopostrežna restavracija. Vse pravice zadržane.
      </p>
    </footer>
  );
};

export default Footer;