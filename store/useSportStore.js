import { create } from "zustand";
import apiService from "../services/api";

export const useSportStore = create((set) => ({
  sports: [],
  loading: false,
  error: null,

  fetchSports: async () => {
    set({ loading: true, error: null });

    try {
      const data = await apiService.getSports();

      set({
        sports: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);

      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));