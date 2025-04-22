import Card from "./Card";

const CardContent = () => {
  const features = [
    { title: "Fast Performance", description: "Optimized for speed and efficiency." },
    { title: "Modern UI", description: "Sleek and responsive design with Tailwind CSS." },
    { title: "Interactive Animations", description: "Smooth interactions with Framer Motion." },
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
