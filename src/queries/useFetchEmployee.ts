import { useQuery } from '@tanstack/react-query';
import { supabase } from 'src/services/supabaseClient';
import { QueryKeys } from 'src/constants/QueryKeys';
import { EMPLOYEE_API } from 'src/services/endpoint';
import type { IEmployee } from 'src/interface/useEmployeeTypes';

export const useFetchEmployees = () => {
  return useQuery<IEmployee[]>({
    queryKey: [QueryKeys.employees],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(EMPLOYEE_API.GET_ALL_EMPLOYEES)
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;

      return data as IEmployee[];
    },
  });
};