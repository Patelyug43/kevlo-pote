const menuItems = [
  { name: 'Cheese Butter Tadka Maggi', price: '₹99', note: 'Limited period style offer item' },
  { name: 'Veg. Butter Tadka', price: 'Must Try', note: 'Flavor-packed butter tadka taste' },
  { name: 'Cheese Maggi', price: 'Popular', note: 'Loaded with rich cheesy goodness' },
  { name: 'Veg Cheese Maggi', price: 'Popular', note: 'Veggies + cheese + perfect spice blend' },
  { name: 'Sandwich Snacks', price: 'Fresh', note: 'Crispy, cheesy and share-friendly snacks' },
  { name: 'Cold Drinks', price: 'Chilled', note: 'Perfect pairing with hot Maggi bowls' },
];

const galleryCaptions = [
  'Cheese Butter Tadka Maggi',
  'Fresh cold drinks',
  'Food delivery available',
  'Veg Butter Tadka',
  'Cheesy Maggi bowls',
  'Comfortable dine-in atmosphere',
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-yellow-600 font-semibold uppercase tracking-wider">Menu Highlights</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Delicious choices for every Maggi lover</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                <span className="text-sm bg-yellow-200 px-2 py-1 rounded-full font-semibold">{item.price}</span>
              </div>
              <p className="mt-3 text-gray-600">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Gallery Highlights</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryCaptions.map((caption, idx) => (
              <div key={caption} className="rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-300 p-5 h-36 flex items-end shadow-sm">
                <p className="font-semibold text-gray-800">{idx + 1}. {caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
