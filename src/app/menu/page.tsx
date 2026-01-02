import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Breakfast Delights",
      description: "Start your day with nutritious and delicious morning meals",
      items: [
        {
          name: "Protein Power Bowl",
          description: "Greek yogurt, granola, fresh berries, and honey drizzle",
          price: "$12.99",
          image: "/Examples/1.png",
          calories: "420 cal",
          tags: ["High Protein", "Gluten-Free"],
        },
        {
          name: "Avocado Toast Supreme",
          description: "Whole grain bread, smashed avocado, poached eggs, cherry tomatoes",
          price: "$14.99",
          image: "/Examples/2.png",
          calories: "380 cal",
          tags: ["Vegetarian", "Heart Healthy"],
        },
        {
          name: "Green Smoothie Bowl",
          description: "Spinach, banana, mango, chia seeds, coconut flakes",
          price: "$11.99",
          image: "/Examples/3.png",
          calories: "290 cal",
          tags: ["Vegan", "Low Sugar"],
        },
      ],
    },
    {
      title: "Wholesome Lunches",
      description: "Balanced midday meals to fuel your afternoon",
      items: [
        {
          name: "Mediterranean Quinoa Bowl",
          description: "Quinoa, grilled chicken, cucumber, feta, olives, hummus",
          price: "$16.99",
          image: "/Examples/4.png",
          calories: "540 cal",
          tags: ["High Protein", "Mediterranean"],
        },
        {
          name: "Asian Fusion Salad",
          description: "Mixed greens, edamame, carrots, sesame ginger dressing",
          price: "$15.99",
          image: "/Examples/5.png",
          calories: "410 cal",
          tags: ["Vegan", "Low Carb"],
        },
        {
          name: "Grilled Salmon Plate",
          description: "Wild salmon, roasted vegetables, brown rice, lemon butter",
          price: "$19.99",
          image: "/Examples/1.png",
          calories: "620 cal",
          tags: ["Omega-3 Rich", "Gluten-Free"],
        },
      ],
    },
    {
      title: "Dinner Specials",
      description: "Satisfying evening meals for a perfect end to your day",
      items: [
        {
          name: "Herb Crusted Chicken",
          description: "Free-range chicken breast, sweet potato mash, green beans",
          price: "$18.99",
          image: "/Examples/2.png",
          calories: "580 cal",
          tags: ["High Protein", "Comfort Food"],
        },
        {
          name: "Vegetarian Curry",
          description: "Chickpeas, spinach, coconut milk, basmati rice, naan",
          price: "$15.99",
          image: "/Examples/3.png",
          calories: "490 cal",
          tags: ["Vegetarian", "Spicy"],
        },
        {
          name: "Grass-Fed Beef Bowl",
          description: "Lean beef, roasted Brussels sprouts, cauliflower rice",
          price: "$21.99",
          image: "/Examples/4.png",
          calories: "650 cal",
          tags: ["Keto-Friendly", "High Protein"],
        },
      ],
    },
    {
      title: "Healthy Snacks",
      description: "Light bites to keep you energized throughout the day",
      items: [
        {
          name: "Energy Bites",
          description: "Dates, almonds, coconut, dark chocolate chips",
          price: "$6.99",
          image: "/Examples/5.png",
          calories: "180 cal",
          tags: ["Vegan", "No Added Sugar"],
        },
        {
          name: "Veggie Sticks & Hummus",
          description: "Carrots, celery, cucumber with homemade hummus",
          price: "$7.99",
          image: "/Examples/1.png",
          calories: "150 cal",
          tags: ["Vegan", "Low Calorie"],
        },
        {
          name: "Protein Smoothie",
          description: "Banana, peanut butter, protein powder, almond milk",
          price: "$8.99",
          image: "/Examples/2.png",
          calories: "320 cal",
          tags: ["High Protein", "Post-Workout"],
        },
      ],
    },
  ];

  const dietaryFilters = [
    "All",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "High Protein",
    "Low Carb",
    "Keto-Friendly",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f1ed] font-sans pt-16">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/navbar-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-zinc-900 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
              Explore our carefully crafted meals designed by nutritionists to
              help you achieve your health goals while enjoying delicious food.
            </p>
          </div>
        </div>

        {/* Dietary Filters */}
        <div className="bg-white border-b border-zinc-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="text-sm font-medium text-zinc-700 whitespace-nowrap">
                Filter by:
              </span>
              {dietaryFilters.map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-full border border-zinc-300 text-sm font-medium text-zinc-700 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700 transition-colors whitespace-nowrap"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-zinc-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-zinc-600">{category.description}</p>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-zinc-200 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-zinc-700">
                        {item.calories}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-zinc-900 flex-1">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-emerald-600 ml-2">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full bg-zinc-900 text-white py-2 rounded-md hover:bg-zinc-800 transition-colors text-sm font-medium">
                        Add to Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white py-16 border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Ready to Start Your Healthy Journey?
            </h2>
            <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our meal plans and get personalized nutrition
              guidance from our expert team. Start eating well today!
            </p>
            <div className="flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-zinc-900 text-white dark:bg-zinc-900 dark:text-white px-8 py-3"
              >
                <span className="flex items-center gap-2">
                  View Meal Plans
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </HoverBorderGradient>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-zinc-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-zinc-400">
              © 2026 VitalPlate. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
