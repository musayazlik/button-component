import Button from "@/components/Button";
import { RiFileList2Line } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-4 justify-center container mx-auto">
      <Button
        color="primary"
        className="flex gap-3"
        radius="full"
        startContent={<RiFileList2Line fontSize={24} />}
        endContent={<RiFileList2Line fontSize={24} />}
      >
        Click me
      </Button>
      <Button
        color="secondary"
        disabled
        startContent={<RiFileList2Line fontSize={24} />}
        endContent={<RiFileList2Line fontSize={24} />}
      >
        Click me
      </Button>
      <Button color="tertiary" disabled>
        Click me
      </Button>
      <Button color="primary" fullWidth className="text-center ">
        Click me
      </Button>
    </main>
  );
}
