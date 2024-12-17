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

const languages = [
  { value: "0", label: "Stars Count" },
  { value: "1", label: "Stars Change" },
];

const SortMode = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");
  const { lngList, setLngList } = useRepoFilter();

  const handleSelect = (currentValue: string) => {
    if (lngList.includes(currentValue)) {
      setLngList(lngList.filter((lng) => lng !== currentValue));
    } else {
      setLngList([...lngList, currentValue]);
    }
    setValue(currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value || "Select language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={() => handleSelect(language.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      lngList.includes(language.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {language.label}
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
