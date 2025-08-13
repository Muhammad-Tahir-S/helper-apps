import { Command, CommandInput } from "./ui/command";

export default function SearchBox() {
  return (
    <Command className="h-13">
      <CommandInput placeholder="Search" />
    </Command>
  );
}
