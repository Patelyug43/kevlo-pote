const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-yellow-600 font-semibold uppercase tracking-wider">About Kevlo Pote</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">More than a cafe, it's a Maggi experience</h2>
          <p className="mt-5 text-lg text-gray-700">
            Kevlo Pote is a popular cafe in Rajkot known for delicious Maggi dishes like Cheese Tadka Maggi and Veg Cheese Maggi.
            Guests love the warm atmosphere, quick service, and unforgettable flavors.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-6">
            <h3 className="font-bold text-xl text-gray-900">Delicious Taste</h3>
            <p className="mt-3 text-gray-700">From buttery tadka to cheesy classics, every plate is made to satisfy cravings.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-6">
            <h3 className="font-bold text-xl text-gray-900">Comfortable Seating</h3>
            <p className="mt-3 text-gray-700">A cozy dine-in setup with tables and chairs for friends and family hangouts.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-6">
            <h3 className="font-bold text-xl text-gray-900">Friendly Service</h3>
            <p className="mt-3 text-gray-700">Efficient ordering, attentive staff, and a welcoming vibe every time you visit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
