import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function dateFormatter(date: string) {
  const dateFormattedString = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });

  // Transformando há em Há:
  const dateFormatted = dateFormattedString.charAt(0).toUpperCase() + dateFormattedString.slice(1);

  return dateFormatted;
}
