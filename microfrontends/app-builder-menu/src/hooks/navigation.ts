export const useNavigation = () => {
  return (route: string) => window.appBuilderRouter.push(route);
};
