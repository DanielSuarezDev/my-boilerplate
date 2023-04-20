import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { listBanksService } from "../services/banks/banks.service";

interface Bank {
  id: number;
  name: string;
}

interface UseBanks {
  banks: Bank[];
  loading: boolean;
  loadBanks: () => Promise<void>;
}

const catchError = (set: any) => (error: any) => {
  console.error("Error loading banks:", error);
  set({ loading: false });
};

const init = (set: any, get: any): UseBanks => ({
  banks: [],
  loading: false,
  loadBanks: async () => {
    set({ loading: true });
    try {
      const banks = await listBanksService();
      set({ banks, loading: false });
    } catch (error) {
      catchError(set)(error);
    }
  },
});

const useBanks = create<UseBanks>(
  devtools(
    persist(
      init,
      {
        name: "banks-storage",
        getStorage: () => localStorage,
      }
    ),
    "banks-storage"
  )
);

export default useBanks;