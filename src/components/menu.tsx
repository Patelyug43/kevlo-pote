import food5 from '../assets/images/food-5.jpeg';
import food3 from '../assets/images/food-3.jpeg';
import food4 from '../assets/images/food-4.jpeg';
import food6 from '../assets/images/food-6.png';

const menuItems = [
  {
    name: 'Cheese Maggie',
    description: 'Classic Maggie topped with generous amounts of cheese.',
    image: food5,
  },
  {
    name: 'Veg Cheese Maggi',
    description: 'Loaded with fresh vegetables and cheese for a healthy twist.',
    image: food3,
  },
  {
    name: 'Veg. Butter Tadka',
    description: 'Spicy tadka flavor combined with creamy butter.',
    image: food4,
  },
  {
    name: 'Vegetable Sandwich',
    description: 'Fresh vegetable sandwich with special spices.',
    image: food6,
  },
];

const Menu = () => {
  return (
    <div id="menu" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Our Menu</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Delicious Offerings
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Check out our most popular dishes.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
