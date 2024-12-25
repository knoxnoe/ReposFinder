import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { useRepoFilter } from "./repo-filter-context";
import type { SortMode } from "./repo-filter-context";

const sortOptions: { value: SortMode; label: string }[] = [
  { value: "top_stars", label: "Top Stars" },
  { value: "top_stars_increase", label: "Top Stars Increase" },
  { value: "recent_stars", label: "Recent Stars" },
  { value: "most_forks", label: "Most Forks" },
  { value: "most_contributors", label: "Most Contributors" },
  { value: "recently_updated", label: "Recently Updated" },
];

const SortMode = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState<SortMode | null>(null);
  const { sortMode, setSortMode } = useRepoFilter();

  const handleSelect = (currentValue: SortMode) => {
    const newSortMode = currentValue === selectedSort ? "top_stars" : currentValue;

    setSelectedSort(newSortMode);
    setSortMode(newSortMode);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {selectedSort
            ? sortOptions.find(option => option.value === selectedSort)?.label
            : "Select Sort Mode"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search sort mode..." />
          <CommandList>
            <CommandEmpty>No sort mode found.</CommandEmpty>
            <CommandGroup>
              {sortOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedSort === option.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SortMode;
