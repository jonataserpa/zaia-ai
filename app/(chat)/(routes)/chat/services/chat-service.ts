import { AxiosError } from "axios";
import { ApiService } from "@/components/axios/axios-config";
import { ChatCompletionRequestMessage } from "openai";

export type TChatProps = {
  data: ChatCompletionRequestMessage[];
};

type TMessage = {
  message: string;
};

/**
 * Handle api errors
 * @param error
 */
export const handleApiErrors = (error: AxiosError, message: string) => {
  if (error && error.response && error.response.data) {
    switch (error.response.data.statusCode) {
      case 400:
        alert(
          "Erro ao processar a requisição, verifique os dados enviados e tente novamente!"
        );
        break;
      case 404:
        alert("Serviço não encontrado");
        break;
      case 500:
        alert(
          "Erro, o servidor não conseguiu processar a requisição, por favor tente novamente mais tarde ou contate o suporte!"
        );
        break;
      default:
        alert(message);
        break;
    }
  }
};

/**
 * Search message IA
 * @param newMessages
 * @returns
 */
const create = async (
  message: TMessage
): Promise<any> => {
  try {
    const { data } = await ApiService.post("/chat", message);
    console.log("chat::: ", data);
    if (data) {
      return data.message;
    }

    return ""
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao enviar mensagem.");
    throw error;
  }
};

export const ChatService = {
  create,
};
