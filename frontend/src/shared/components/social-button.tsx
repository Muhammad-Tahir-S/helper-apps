import { Button } from "./ui/button";

export default function SocialButton({ buttonText }: { buttonText: string }) {
  return (
    <Button className="h-11 bg-transparent text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-800 border-[2px] hover:bg-primary-50 dark:hover:bg-primary-950 dark:hover:text-gray-200 hover:border-primary-50 dark:hover:border-primary-950 focus:border-primary-400  dark:focus:border-primary-400 dark:focus:text-gray-500  focus:bg-transparent dark:bg-transparent">
      {buttonText}
    </Button>
  );
}
