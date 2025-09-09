// src/components/modals/ReservationModal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useReservationStore } from "@/hooks/useReservationStore";
import { ReservationForm } from "../reservasi/ReservationForm";

export function ReservationModal() {
  const { isOpen, onClose } = useReservationStore();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[425px] bg-card/80 backdrop-blur-lg border" // <-- TAMBAHKAN KELAS INI
      >
        <DialogHeader>
          <DialogTitle>Buat Reservasi</DialogTitle>
          <DialogDescription>
            Amankan meja Anda. Isi detail di bawah ini dan kami akan segera
            mengkonfirmasinya.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ReservationForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
