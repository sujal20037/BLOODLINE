const AppFeatures = () => {
    const features = [
      {
        title: "Real-Time Donation Tracking",
        description:
          "Track the status of your blood donations, know when it is used, and see the impact you've made in saving lives.",
        buttonLabel: "Track Now",
        icon: "🩸",
        link: "/track-donation",
      },
      {
        title: "Organize Blood Donation Camps",
        description:
          "Partner with us to set up blood donation camps in your locality. Manage registrations and logistics with ease.",
        buttonLabel: "Organize Camp",
        icon: "🏥",
        link: "/organize-camp",
      },
      {
        title: "Access Donor Networks",
        description:
          "Easily connect with other donors and create a strong community ready to help in emergencies.",
        buttonLabel: "Join Network",
        icon: "🤝",
        link: "/donor-network",
      },
      {
        title: "Explore Nearby Hospitals",
        description:
          "Find hospitals and blood banks near you that require urgent blood donations or provide critical care services.",
        buttonLabel: "Explore Now",
        icon: "🏨",
        link: "/nearby-hospitals",
      },
      {
        title: "Volunteer for Blood Awareness",
        description:
          "Join our mission to spread awareness about blood donation and make a difference in your community.",
        buttonLabel: "Volunteer Now",
        icon: "📢",
        link: "/volunteer",
      },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold text-red-500 mb-4">Explore Our Features</h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b border-gray-200 pb-4"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <a
                href={feature.link}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                {feature.buttonLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AppFeatures;
  