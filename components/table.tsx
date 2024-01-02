import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IRows } from "@/app/(history)/(routes)/history/interfaces/iRows.interface";
import moment from 'moment';
import { FileAudio, MessageSquare } from "lucide-react";

const TablePage = ({ rows, totalCount }: IRows) => {

  if (rows && rows.length === 0) {
    return <div style={{ marginLeft: 20 }}>Nenhum histórico registrado...</div>;
  }

  function validateType(type: number | undefined) {
    if (type === 1) {
      return (<MessageSquare />)
     } 
     
     return (<FileAudio />)
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="px-4  md:px-10 text-4xl md:text-2xl gap-4 font-bold text-left">
          Histórico Chat e Vídeos
        </h2>
        <p className="px-4 md:px-10 text-muted-foreground font-light text-sm md:text-lg text-left">
          Listagem todos registros gerados pela IA
        </p>
      </div>
      <div className="px-4 md:px-10 lg:px-13">
        <Table className="table-auto">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Data criação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell className="text-ellipsis">
                    
                    <div className="flex items-center gap-x-4">
                      <div className="flex flex-col ...">
                        <div className="font-semibold">
                          Enviada: <label className="text-neutral-500">{row.message}</label>
                        </div>
                        <div className="font-semibold">
                          Resposta: <label className="text-neutral-500">{row.response}</label>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{validateType(row.type)}</TableCell>
                  <TableCell>{moment(row.createdAt).format('DD/MM/YYYY')}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableCaption>
            <div className="flex flex-row gap-2">
              <p>Total: </p>
              <strong>{totalCount}</strong>
            </div>
          </TableCaption>
        </Table>
      </div>
    </div>
  );
};

export default TablePage;
