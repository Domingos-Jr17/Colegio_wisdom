import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-white flex flex-col gap-6 items-center justify-center h-screen text-white px-4">
      <span className="text-6xl animate-bounce">😕</span>
      <h1 className="font-bold text-4xl text-yellow-400 text-center">
        Ops... Página não encontrada
      </h1>
      <p className="text-lg text-blue-100 text-center max-w-md">
        Parece que você se perdeu no caminho. A página que procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg text-base font-semibold shadow hover:bg-yellow-300 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};
