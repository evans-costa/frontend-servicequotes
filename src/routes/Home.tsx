import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold">Orçamentos Feitos</h1>
      <Link to="/quotes/1">
        <Card className="flex items-center justify-between">
          <div className="p-6">
            <CardTitle className="text-xl">Cliente 1</CardTitle>
            <CardDescription>
              <p>Orçamento 1</p>
            </CardDescription>
          </div>

          <div className="flex flex-col items-center justify-center p-6">
            <p className="text-lg font-medium">R$ 2000</p>
            <p className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" /> 99999-9999
            </p>
          </div>
        </Card>
      </Link>
      <Card className="flex items-center justify-between">
        <div className="p-6">
          <CardTitle className="text-xl">Cliente 1</CardTitle>
          <CardDescription>
            <p>Orçamento 1</p>
          </CardDescription>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <p className="text-lg font-medium">R$ 2000</p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" /> 99999-9999
          </p>
        </div>
      </Card>
      <Card className="flex items-center justify-between">
        <div className="p-6">
          <CardTitle className="text-xl">Cliente 1</CardTitle>
          <CardDescription>
            <p>Orçamento 1</p>
          </CardDescription>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <p className="text-lg font-medium">R$ 2000</p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" /> 99999-9999
          </p>
        </div>
      </Card>
      <Card className="flex items-center justify-between">
        <div className="p-6">
          <CardTitle className="text-xl">Cliente 1</CardTitle>
          <CardDescription>
            <p>Orçamento 1</p>
          </CardDescription>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <p className="text-lg font-medium">R$ 2000</p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" /> 99999-9999
          </p>
        </div>
      </Card>
    </div>
  );
}
