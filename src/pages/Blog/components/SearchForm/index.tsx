import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <label>
        <h3>Publicações</h3>
        <span>3 publicações</span>
      </label>
      <input placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}