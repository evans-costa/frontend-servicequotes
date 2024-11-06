import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

export default function Quote() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Detalhes do orçamento</CardTitle>
          <CardDescription>Orçamento 1 para Cliente 1</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p>Data: 16/10/2024</p>
            <p>Telefone: 99999-9999</p>
            <p className="mt-2 text-lg font-semibold">Total: R$ 2000</p>
          </div>
          <Table className="mt-3 table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead className="w-2/5">Nome do produto</TableHead>
                <TableHead className="w-1/3">Qtde.</TableHead>
                <TableHead>Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="break-words">Tomada 2</TableCell>
                <TableCell>10</TableCell>
                <TableCell>R$ 400,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="break-words">Tomada 2</TableCell>
                <TableCell>10</TableCell>
                <TableCell>R$ 400,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="break-words">Tomada 2</TableCell>
                <TableCell>10</TableCell>
                <TableCell>R$ 400,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="break-words">Tomada 2</TableCell>
                <TableCell>10</TableCell>
                <TableCell>R$ 400,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="break-words">Tomada 2</TableCell>
                <TableCell>10</TableCell>
                <TableCell>R$ 400,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="break-words">Tomada 2</TableCell>
                <TableCell>10</TableCell>
                <TableCell>R$ 400,00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center gap-3">
          <Download className="size-6" />
          <p className="text-lg font-medium">Baixe o orçamento</p>
        </CardFooter>
      </Card>
    </section>
  );
}
