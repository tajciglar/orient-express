const Info = () => {
   return (
       <div id="kakoDoNas" className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kako do nas:</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                Restavracija Orient Express se nahaja v poslovni stavbi Slovenskih železnic in je bila prvotno namenjena zgolj zaposlenim,
                vendar smo sedaj omogočili obisk naše restavracije tudi zunanjim gostom z novim vhodom s Pražakove ulice.
            </p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.731393949382!2d14.506745776137075!3d46.05645569372831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329c5bf491a5%3A0x5e189abbc9d0432c!2sOrient%20Express%20samopostre%C5%BEna%20restavracija!5e0!3m2!1ssl!2ssi!4v1733569999679!5m2!1ssl!2ssi" 
                width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md mb-4"
            ></iframe>
       </div>
   )
}

export default Info;
