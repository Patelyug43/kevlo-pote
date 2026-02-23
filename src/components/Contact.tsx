const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-yellow-700 font-semibold uppercase tracking-wider">Contact & Location</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Visit Kevlo Pote today</h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border border-yellow-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">Address</h3>
            <p className="mt-3 text-gray-700">
              Jk Chowk, Pushkardham Rd, near Akashwani Chowk, opp. Shyamal Infinity, Bhawani Nagar, Rajkot, Gujarat 360005
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://maps.app.goo.gl/YXGeTm8sq1AK7JGu6" target="_blank" rel="noreferrer" className="rounded-md bg-black px-4 py-2 text-white font-semibold">Open in Google Maps</a>
              <a href="tel:09510931838" className="rounded-md border border-black px-4 py-2 font-semibold text-black">Call Now</a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-yellow-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">Connect</h3>
            <p className="mt-3 text-gray-700"><span className="font-semibold">Phone:</span> 095109 31838</p>
            <p className="mt-2 text-gray-700 break-all"><span className="font-semibold">Instagram:</span> @kevlopotemaggiandsnacks</p>
            <a href="https://www.instagram.com/kevlopotemaggiandsnacks?igsh=a2E1ZTI2MWptbGR3" target="_blank" rel="noreferrer" className="inline-block mt-5 rounded-md bg-yellow-400 px-4 py-2 font-bold text-black hover:bg-yellow-500">
              Follow on Instagram
            </a>

            <iframe
              title="Kevlo Pote map"
              className="mt-6 w-full h-56 rounded-lg"
              loading="lazy"
              src="https://maps.google.com/maps?q=Jk%20Chowk%2C%20Pushkardham%20Rd%2C%20Rajkot&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
