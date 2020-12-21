export interface FormatValueProps {
  value: number;
  type?: string;
}

const formatValue = (options: FormatValueProps): string => {
  const { value, type } = options;

  const valueFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  if (type === 'outcome') {
    return ` - ${valueFormatted}`;
  }

  return valueFormatted;
};

export default formatValue;
