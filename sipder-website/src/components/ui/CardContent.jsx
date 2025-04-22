import Card from "./Card";

const CardContent = () => {
  const features = [
    {
      title: "Autonomous Inspection",
      description:
        "Autonomously navigation in substations, reducing the need for human intervention in high-risk zones.",
    },
    {
      title: "Partial Discharge Detection",
      description: "Equipped with sensors to detect partial discharges.",
    },
    {
      title: "User Friendly Interface",
      description: "Intuitive and user-friendly interface with the robotic system.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {features.map((feature, index) => (
        <Card key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

export default CardContent;
