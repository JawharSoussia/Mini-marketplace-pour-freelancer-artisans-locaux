
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ViewToggle } from "@/components/ViewToggle";
import { Service } from "@/types/service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem("services") || "[]");
    setServices(storedServices);
    setFilteredServices(storedServices);
  }, []);

  const handleSearch = (query: string) => {
    const filtered = services.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()) ||
        service.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Services disponibles</h1>
        <Link to="/publish">
          <Button>Publier un service</Button>
        </Link>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="flex justify-end mb-4">
        <ViewToggle isGrid={isGrid} onToggle={() => setIsGrid(!isGrid)} />
      </div>

      <div
        className={
          isGrid
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun service trouvé
        </div>
      )}
    </div>
  );
}
