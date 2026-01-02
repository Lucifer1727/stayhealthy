import { Navbar } from "@/components/ui/navbar";
import Link from "next/link";

export default function HelpPage() {
  const helpCards = [
    {
      title: "Your Orders",
      description: "Track meal plans",
      details: "Edit or cancel orders",
      icon: "📦",
      link: "#orders",
    },
    {
      title: "Returns and Refunds",
      description: "Return or exchange items",
      details: "Print return mailing labels",
      icon: "↩️",
      link: "#returns",
    },
    {
      title: "Manage Addresses",
      description: "Update your addresses",
      details: "Add address, landmark details",
      icon: "🏠",
      link: "#addresses",
    },
    {
      title: "Manage Subscription",
      description: "View your meal plans",
      details: "Membership details",
      icon: "⭐",
      link: "#subscription",
    },
    {
      title: "Payment Settings",
      description: "Add or edit payment methods",
      details: "Change expired debit or credit card",
      icon: "💳",
      link: "#payment",
    },
    {
      title: "Account Settings",
      description: "Change your email or password",
      details: "Update login information",
      icon: "👤",
      link: "#account",
    },
    {
      title: "Nutritionist Support",
      description: "Find expert help and support",
      details: "Connect with nutritionists",
      icon: "🍎",
      link: "#support",
    },
  ];

  const recommendedTopics = [
    "Meal Plan Delivery",
    "Returns, Refunds, Replacement",
    "Ordering",
    "Managing Your Account",
    "Subscription Plans",
    "Payments & Pricing",
    "Nutrition Guidance",
    "Dietary Restrictions",
    "Recipe Library",
    "More Help",
  ];

  const learnHowTo = [
    { title: "Tracking your Meal Plan", link: "#track" },
    { title: "Shipping and Delivery", link: "#shipping" },
    { title: "Customize Your Preferences", link: "#customize" },
    { title: "Dietary Requirements - FAQ", link: "#dietary-faq" },
    { title: "Accepted Payment Methods", link: "#payment-methods" },
    { title: "Gift Subscriptions", link: "#gift" },
    { title: "Cancellations and Refunds", link: "#refunds" },
    { title: "More Support Options", link: "#more-support" },
  ];

  const tryItYourself = [
    { title: "Manage Your Meal Plans", link: "#manage" },
    { title: "Check the Status of Your Order", link: "#status" },
    { title: "Change Dietary Preferences", link: "#preferences" },
    { title: "Sign Up for Premium Plan", link: "#premium" },
    { title: "View Transaction History", link: "#transactions" },
    { title: "Manage Your Payment Methods", link: "#payment-manage" },
    { title: "Recipe Troubleshooting - All Help Topics", link: "#recipe-help" },
    { title: "Self-Service Video Library", link: "#videos" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f1ed] font-sans pt-16">
        {/* Header Section */}
        <div className="bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-zinc-900 mb-2">
              Hello. What can we help you with?
            </h1>
          </div>
        </div>

        {/* Help Cards Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold text-zinc-900 mb-6">
            Some things you can do here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {helpCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{card.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-zinc-900 mb-1 group-hover:text-emerald-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-600">{card.description}</p>
                    <p className="text-sm text-zinc-500">{card.details}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Search Section */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-zinc-900 mb-2">
              Find more solutions
            </h2>
            <p className="text-sm text-zinc-600 mb-3 italic">
              Type something like, &quot;question about a charge&quot;
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search help topics..."
                className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Browse Help Topics Section */}
          <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden">
            <div className="border-b border-zinc-200 px-6 py-4">
              <h2 className="text-xl font-semibold text-zinc-900">
                Browse Help Topics
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
              {/* Recommended Topics */}
              <div className="p-6">
                <h3 className="font-semibold text-zinc-900 mb-4 flex items-center justify-between">
                  Recommended Topics
                  <svg
                    className="w-5 h-5 text-zinc-400"
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
                </h3>
                <ul className="space-y-2">
                  {recommendedTopics.map((topic, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-sm text-zinc-700 hover:text-emerald-600 hover:underline"
                      >
                        {topic}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn How To */}
              <div className="p-6">
                <h3 className="font-semibold text-zinc-900 mb-4">
                  Learn how to...
                </h3>
                <ul className="space-y-2">
                  {learnHowTo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-sm text-[#007185] hover:text-emerald-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Try It Yourself */}
              <div className="p-6">
                <h3 className="font-semibold text-zinc-900 mb-4">
                  Try it Yourself
                </h3>
                <ul className="space-y-2">
                  {tryItYourself.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-sm text-[#007185] hover:text-emerald-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-zinc-900 text-white py-8 mt-12">
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
