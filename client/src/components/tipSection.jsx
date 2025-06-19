// import React from "react";

const TipsSection = () => {
  const tipsData = [
    {
      title: "The day before",
      tips: [
        "Have an iron-rich diet such as beans, spinach or meat, poultry.",
        "Have a proper sleep of at least 8 hours.",
        "Include more liquids in your diet."
      ]
    },
    {
      title: "On the Donation day",
      tips: [
        "Do carry your identification forms e.g., driver’s license.",
        "Drink 2 cups of water before donating blood.",
        "Wear a half sleeve shirt so that you can easily roll it up."
      ]
    },
    {
      title: "After the Donation",
      tips: [
        "Reward yourself with a snack as refreshment immediately.",
        "Drink more liquids over a period of 24 hours.",
        "Remove the bandage after a few hours.",
        "Don’t do vigorous workout & give your body rest."
      ]
    }
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center text-black mb-4">Tips</h2>
      <p className="text-center text-gray-700 mb-10">
        Here are some tips to put your mind at ease during the blood donation process
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tipsData.map((category, index) => (
          <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-black mb-2">{category.title}</h3>
            <hr />
            <ul className="list-disc pl-5 space-y-2 mt-3 p-2">
              {category.tips.map((tip, idx) => (
                <li key={idx} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;
