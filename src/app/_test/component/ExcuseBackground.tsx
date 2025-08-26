export function ExcuseBackground() {
  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center animate-bgMove"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/014/533/873/small/food-background-food-menu-backround-photo.jpg')",
        opacity: 0.25, // бага зэрэг тунгалаг болгох
        filter: "blur(2px)", // бага зэрэг blur
      }}
    />
  );
}