import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IHistoryProps } from "../interfaces/iHistory.interface";
import { ApiService } from "@/components/axios/axios-config";

export type TChatWithTotalCount = {
  data: IHistoryProps[];
  totalCount: number;
};

export type directionOfSort = "ASC" | "DESC" | undefined;

/**
 * Handle api errors
 * @param error
 */
export const handleApiErrors = (error: AxiosError, message: string) => {
  if (error && error.response && error.response.data) {
    switch (error.response.data.statusCode) {
      case 400:
        toast.error(
          "Erro ao processar a requisição, verifique os dados enviados e tente novamente!"
        );
        break;
      case 404:
        toast.error("Serviço não encontrado");
        break;
      case 500:
        toast.error(
          "Erro, o servidor não conseguiu processar a requisição, por favor tente novamente mais tarde ou contate o suporte!"
        );
        break;
      default:
        toast.error(message);
        break;
    }
  }
};

const getAll = async (): Promise<TChatWithTotalCount | Error> => {
  try {
    const url = "/chat";
    const { data } = await ApiService.get(url);

    if (data) {
      return {
        data: data.data,
        totalCount: data.headers,
      };
    }

    return new Error("Erro ao listar os registros.");
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao listar os registros.");
    throw error;
  }
};

export const HistoryService = {
  getAll,
};