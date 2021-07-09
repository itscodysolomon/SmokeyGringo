module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `tuesday-images`,
                path: `${__dirname}/src/assets/images/always-tuesday/`,
            },
        },
    ],
    siteMetadata: {
        title: "Smokey Gringo Taco Bar",
        description:
          "🇲🇽 MEXICUE! 🇺🇸 | Tacos 🌮 | Nachos 🧀 | Burritos 🌯 | Salads 🥗 | Wings 🍗 | Ribs 🍖 | Bowls 🍚 | Vegetarian Options 🥬 | Full Bar 🍻 | 🔥 #alwaystuesday #smokeygringo 🔥",
        url: "https://www.smokeygringo.com", // No trailing slash allowed!
        image: "/images/smokey-gringo-logo.png", // Path to your image you placed in the 'static' folder
        twitterUsername: "@SmokeyGringo",
      },
}