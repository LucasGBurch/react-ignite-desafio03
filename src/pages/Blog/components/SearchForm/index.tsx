import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useContext } from 'react';
import { SearchFormContainer } from "./styles";
import { GitHubContext } from '../../../../contexts/GitHubContext';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchGitHubUserIssuesData } = useContext(GitHubContext);

  const {
    register,
    handleSubmit,
    // formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchGitHubUserIssuesData(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)} >
      <label>
        <h3>Publicações</h3>
        <span>3 publicações</span>
      </label>
      <input type='text' placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  );
}