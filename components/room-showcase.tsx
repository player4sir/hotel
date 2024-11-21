import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with city view",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$299",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Perfect for business travelers",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$199",
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Ultimate luxury experience",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$499",
  },
];

export default function RoomShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room) => (
        <Card key={room.id} className="overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{room.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {room.description}
                </p>
              </div>
              <div className="text-lg font-bold">{room.price}</div>
            </div>
            <Button className="w-full" asChild>
              <Link href={`/rooms/${room.id}`}>View Details</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}