
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";

interface ViewToggleProps {
  isGrid: boolean;
  onToggle: () => void;
}

export const ViewToggle = ({ isGrid, onToggle }: ViewToggleProps) => {
  return (
    <Button variant="outline" size="icon" onClick={onToggle} className="mb-4">
      {isGrid ? <List className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
    </Button>
  );
};
