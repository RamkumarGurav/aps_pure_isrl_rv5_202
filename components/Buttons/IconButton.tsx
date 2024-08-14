import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {
  isLoading?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  loadingText?: string;
  iconRight?: boolean;
  children: React.ReactNode;
  className?: string; // Define className as an optional string prop
};

export function IconButton({
  isLoading = false,
  loadingText,
  variant = "default",
  children,
  iconRight = true,
  className, // Use the className prop here
  ...rest
}: Props) {
  return iconRight ? (
    <Button
      type="submit"
      variant={variant}
      className={`${className}`} // Use the passed className
      disabled={isLoading ? true : false}
      {...rest}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {loadingText ? loadingText : children}
    </Button>
  ) : (
    <Button
      variant={variant}
      className={`${className}`} // Use the passed className
      disabled={isLoading ? true : false}
      {...rest}
    >
      {loadingText ? loadingText : children}
      {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  );
}
