import { Link } from "react-router";

import { NAVIGATION_ITEMS } from "@/lib/navigation";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function Menu() {
  return (
    <Accordion type="multiple">
      {NAVIGATION_ITEMS.map((page) => (
        <AccordionItem value={page.label}>
          <AccordionTrigger className="text-md px-2 cursor-pointer">{page.label}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-2">
            {page.children?.map((child) => (
              <Link to={child.pathname}>
                <div className="text-sm px-4 py-[10px] hover:bg-gray-200 w-full rounded-md">{child.label}</div>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
