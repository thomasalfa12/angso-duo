// src/lib/schemas.ts
import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(3, { message: "Nama harus diisi, minimal 3 karakter." }),
  phone: z.string().min(10, { message: "Nomor telepon tidak valid." }).max(15),
  guests: z.number().min(1, { message: "Minimal 1 tamu." }),
  date: z.date({ message: "Silakan pilih tanggal." }),
  time: z.string({ message: "Silakan pilih waktu." }),
});