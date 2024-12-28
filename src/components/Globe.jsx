import { World } from "./design/Globe";

export function Globe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.2,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.9)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 10,
    rings: 1,
    maxRings: 10,
    initialPosition: { lat: 20.5937, lng: 78.9629 }, // India as the center
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#00FF00"]; // Array of colors for arcs

  // Starting coordinates for India (centralized to Bengaluru for IT relevance)
  const indiaLat = 22.2587;
  const indiaLng = 71.1946;

  // Famous IT locations around the world
  const itHubs = [
    { name: "Silicon Valley (USA)", lat: 37.7749, lng: -122.4194 },
    { name: "London (UK)", lat: 51.5074, lng: -0.1278 },
    { name: "Sydney (Australia)", lat: -33.8688, lng: 151.2093 },
    { name: "Dubai (UAE)", lat: 25.276987, lng: 55.296249 },
    { name: "Tokyo (Japan)", lat: 35.6895, lng: 139.6917 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Toronto (Canada)", lat: 43.65107, lng: -79.347015 },
    { name: "Berlin (Germany)", lat: 52.5200, lng: 13.4050 },
    { name: "Johannesburg (South Africa)", lat: -26.2041, lng: 28.0473 },
    { name: "Bengaluru (India)", lat: 12.9716, lng: 77.5946 }, // Self-interaction
  ];

  // Generate arcs with India as the starting point
  const sampleArcs = itHubs.map((hub) => ({
    startLat: indiaLat,
    startLng: indiaLng,
    endLat: hub.lat,
    endLng: hub.lng,
    arcAlt: 0.25,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="mx-auto relative overflow-hidden h-64 w-72 md:h-96 md:w-96">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
};
export default Globe;