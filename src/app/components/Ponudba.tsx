const Ponudba = () => {
  return (
    <div id="ponudba" className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Naša ponudba</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        V Orient Express samopostrežni restavraciji ponujamo širok izbor jedi, ki zadovoljijo vsak okus. Pri nas najdete:
      </p>
      <ul className=" pl-6 text-gray-600 text-lg leading-relaxed mb-4">
        <li>Mesne jedi za ljubitelje tradicionalnih okusov</li>
        <li>Vegetarijanske in veganske jedi, polne svežih in hranljivih sestavin</li>
        <li>Morske specialitete, ki pričarajo okus morja</li>
        <li>Jedi na žlico, idealne za tople in domače obroke</li>
      </ul>
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        Poleg tega ponujamo tudi storitve za zaključene družbe in catering, kjer poskrbimo za odlično kulinarično izkušnjo, prilagojeno vašim potrebam. 
        Naj gre za poslovne dogodke, praznovanja ali druženja, pri nas ste v dobrih rokah.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed">
        Vabljeni, da nas obiščete in okusite, kaj smo pripravili za vas!
      </p>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Odpiralni časi:</h2>
        <ul className="text-gray-600 text-lg leading-relaxed">
            <li>Ponedeljek - Petek: 07:00  - 15:00</li>
            <li>Sobota in Nedelja: Zaprto</li>
        </ul>
      </div>
    </div>
  );
};

export default Ponudba;