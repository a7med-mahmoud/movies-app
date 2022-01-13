function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString();
}

export default formatDate;
