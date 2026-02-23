const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-yellow-200 via-yellow-100 to-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block rounded-full bg-black px-4 py-1 text-xs font-bold tracking-widest text-yellow-300">
              RAJKOT'S MAGGI FAVORITE
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Kevlo Pote <span className="text-yellow-500">Maggi & Snacks</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700">
              Not just today, every day is a Maggi day. Enjoy hot, cheesy, buttery delights with cozy seating and friendly service in the heart of Rajkot.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToMenu}
                className="rounded-md bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800"
              >
                Explore Menu
              </button>
              <button
                onClick={scrollToContact}
                className="rounded-md border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white"
              >
                Visit Us
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl border border-yellow-300">
            <div className="aspect-square w-full max-w-sm mx-auto rounded-full bg-yellow-300 flex items-center justify-center border-8 border-black/10">
              <div className="text-center px-6">
                <p className="text-4xl font-black leading-none">KEVLO POTE</p>
                <p className="text-xl mt-2 font-bold tracking-wide">MAGGI & SNACKS</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-yellow-100 p-3"><span className="font-bold">City:</span> Rajkot</div>
              <div className="rounded-lg bg-yellow-100 p-3"><span className="font-bold">State:</span> Gujarat</div>
              <div className="rounded-lg bg-yellow-100 p-3 col-span-2"><span className="font-bold">Timing Highlight:</span> 6:00 PM to 3:00 AM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
