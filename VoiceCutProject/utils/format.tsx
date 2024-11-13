// interface NumberFormatProps {
//   number: number;
// }

export const formatNumber = (number: string | number): string => {
  const cleaned = number.toString().replace(/\D/g, '');
  if (cleaned.length !== 11) {
    return '유효하지 않은 형식의 번호입니다';
  }

  const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2\n-$3');
  return formatted;
};
