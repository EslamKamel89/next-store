import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <Button variant={"secondary"}>Click</Button>
    </>
  );
}
