const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Как это было
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="aspect-[4/3] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={`Workshop moment ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
