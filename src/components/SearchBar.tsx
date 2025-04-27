
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative max-w-md w-full mx-auto mb-8">
      <Input
        type="text"
        placeholder="Rechercher un service..."
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10"
      />
      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};
