
import AboutView from "@/view/AboutView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler Plate Next.js 14",
};
const page = () => {
  return (
    <div>
      <AboutView />
    </div>
  )
}

export default page