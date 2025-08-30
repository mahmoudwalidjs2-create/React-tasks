import { useQuery } from '@tanstack/react-query';
import { getAllTasks } from '../../services/apiGetAllTasks';

const useGetAllTasks = () => {
  const {
    data: dataGetAllTasks,
    isPending: isLoadingGetAllTasks,
    error: errorGetAllTasks,
    refetch: refetchGetAllTasks,
  } = useQuery({
    queryKey: ['get-all-tasks'],
    queryFn: () => getAllTasks(),
    refetchOnWindowFocus: true,
  });

  return {
    dataGetAllTasks,
    isLoadingGetAllTasks,
    errorGetAllTasks,
    refetchGetAllTasks,
  };
};

export default useGetAllTasks;
