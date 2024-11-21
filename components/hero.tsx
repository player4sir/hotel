import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Hotel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Experience Luxury
            <strong className="block font-extrabold text-primary">
              Like Never Before
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Indulge in the perfect blend of comfort, elegance, and world-class service at our luxury hotel.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button size="lg" asChild>
              <Link href="/booking">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/virtual-tour">Virtual Tour</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}