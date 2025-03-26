import { Spinner } from "@heroui/react";

function Loading() {
  return (
    <Spinner
      classNames={{ label: "text-foreground mt-4" }}
      label="wave"
      variant="wave"
    />
  );
}

export default Spinner;
