import { ScrollArea } from "@/components/ui/scroll-area";

import { Menu } from "./menu";

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-100 flex flex-col">
      <div className="text-2xl font-bold text-center py-2">Minerva</div>

      <div className="flex-1 w-full overflow-hidden">
        <ScrollArea className="h-full">
          <Menu />
        </ScrollArea>
      </div>

      <div className="text-center py-2">Winhwi</div>
    </div>
  );
}
