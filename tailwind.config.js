/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "order-1": "url('/public/img/order1.png')",
        "order-2": "url('/public/img/order2.png')",
        "order-3": "url('/public/img/order3.png')",
        "order-4": "url('/public/img/order4.png')",
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
