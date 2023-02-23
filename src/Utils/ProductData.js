const ProductData = {
  title: "FitBit 19 - The Smartest Watch",
  description:
    "People wear a Fitbit on their wrist to track their daily steps and help them improve their health and fitness. Depending on the specific model of Fitbit, a person may also use it for: tracking their sleeping patterns. monitoring and tracking their heart rate.",
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

Object.freeze(ProductData); //makes object as a constant. No values can be updated.

export default ProductData;
