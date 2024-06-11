import { screen, render, fireEvent } from "@testing-library/react";
import { Modal } from "../components/Modal";

describe("Modal Component test", () => {
  it("Should render modal", () => {
    render(<Modal showModal={true} closeModal={() => {}} />);
    screen.queryByText(/Bem-Vindo(a)!/i);
    const button = screen.getByRole("button", { name: /continuar/i });
    fireEvent.click(button);
  });
});
