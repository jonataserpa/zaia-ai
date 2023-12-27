import { render, screen } from "@testing-library/react";
import HomePage from "../page";
import "@testing-library/jest-dom";
import { IChatProps } from "@/app/(chat)/(routes)/chat/interfaces/iChat.interface";

const mockTodos: IChatProps[] = [
  {
    id: 1,
    label: "Chat",
    href: "/chat",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 2,
    label: "Geração de Vídeo",
    href: "/video",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("HomePage - List chat", () => {
  it('should render "No conversation" when the array is empty', () => {
    // ARRANGE
    render(<HomePage rows={[]}/>);

    //ACT
    const message = screen.getByText("Carregando dashboard...");

    // ASSERT
    expect(message).toBeInTheDocument();
  });

  it("should render a list chat with the correct number of items", async () => {
    // ARRANGE
    render(<HomePage rows={mockTodos} />);

    // ACT
    const firstItem = screen.getAllByTestId("Chat")[0];

    // ASSERT
    expect(firstItem).toHaveTextContent("Chat");
  });
});
