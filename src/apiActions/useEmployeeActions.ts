import { useQueryClient } from '@tanstack/react-query';
import { supabase } from 'src/services/supabaseClient';
import { QueryKeys } from 'src/constants/QueryKeys';
import { EMPLOYEE_API } from 'src/services/endpoint';
import type { IEmployee } from "src/interface/useEmployeeTypes";


export const useEmployeeActions = () => {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: [QueryKeys.employees] });

  const tryAdd = async (body: IEmployee) => {
    const { data, error } = await supabase
      .from(EMPLOYEE_API.CREATE_EMPLOYEE)
      .insert([body])
      .select();

    if (error) throw error;

    await invalidate();
    return data;
  };

  const tryUpdate = async (id: number, body: Partial<IEmployee>) => {
    const { data, error } = await supabase
      .from(EMPLOYEE_API.UPDATE_EMPLOYEE)
      .update(body)
      .eq('id', id)
      .select();

    if (error) throw error;

    await invalidate();
    return data;
  };

  const tryDelete = async (id: number) => {
    const { error } = await supabase
      .from(EMPLOYEE_API.DELETE_EMPLOYEE)
      .delete()
      .eq('id', id);

    if (error) throw error;

    await invalidate();
  };

  return { tryAdd, tryUpdate, tryDelete };
};