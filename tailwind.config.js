module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#e6e6e6",
          "base-100": "#ffffff",
        },
      },
      "white",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}
