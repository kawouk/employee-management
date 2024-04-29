export const isEmployeeActive = (active: boolean): string => {
  return active ? "active" : "deactived";
};
export function getLastPage(numData: number, limit: number, page: number): number {
  const maxPage: number = Math.ceil(numData / limit);
  const currentPage: number = Math.min(page, maxPage);
  const lastOffset: number = Math.max(0, (currentPage - 1) * limit);
  return lastOffset;
}

