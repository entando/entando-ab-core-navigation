export const useNavigation = () => {
  return (route: string) => window.entando.router.push(route);
};
