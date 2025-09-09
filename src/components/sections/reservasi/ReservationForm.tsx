"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import {
  Calendar as CalendarIcon,
  Loader2,
  CheckCircle,
  CalendarPlus,
  MessageSquare, // <-- 1. Tambahkan impor ikon baru
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { reservationSchema } from "@/lib/schema";
import { POPPER_Z_INDEX } from "@/components/ui/dialog";

const timeSlots = [
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "18:00",
  "19:00",
  "20:00",
];

// 2. Definisikan nomor WhatsApp tujuan (format internasional tanpa '+')
const WHATSAPP_NUMBER = "6285156566928";

type ReservationValues = z.infer<typeof reservationSchema>;

export function ReservationForm({ onClose }: { onClose: () => void }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationValues | null>(
    null
  );

  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phone: "",
      guests: 1,
      date: undefined,
      time: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: ReservationValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulasi request
      setSubmittedData(values);
      setIsSuccess(true);
      toast.success("Reservasi Anda telah diterima!");
      form.reset();
    } catch (error) {
      toast.error("Gagal mengirim reservasi. Silakan coba lagi.");
      console.error("Reservation submission error:", error);
    }
  }

  const generateGoogleCalendarLink = () => {
    if (!submittedData?.date) return "#";
    const [hours, minutes] = submittedData.time.split(":").map(Number);
    const startDate = new Date(submittedData.date);
    startDate.setHours(hours, minutes, 0, 0);
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);
    const formatDate = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d{3}/g, "");
    const url = new URL("https://www.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set(
      "text",
      `Reservasi di Angso Duo untuk ${submittedData.name}`
    );
    url.searchParams.set(
      "dates",
      `${formatDate(startDate)}/${formatDate(endDate)}`
    );
    url.searchParams.set(
      "details",
      `Reservasi untuk ${submittedData.guests} orang.\nKontak: ${submittedData.phone}`
    );
    url.searchParams.set("location", "Angso Duo Cafe, Jambi");
    return url.toString();
  };

  // 3. Buat fungsi baru untuk generate link WhatsApp
  const generateWhatsAppLink = () => {
    if (!submittedData?.date) return "#";

    // Template pesan yang akan dikirim
    const message = `
Reservasi Baru Diterima! ☕

*Nama:* ${submittedData.name}
*No. Telepon:* ${submittedData.phone}
*Jumlah Tamu:* ${submittedData.guests}
*Tanggal:* ${format(submittedData.date, "eeee, d MMMM yyyy", { locale: id })}
*Waktu:* ${submittedData.time} WIB

Mohon segera dikonfirmasi.
    `.trim();

    // Encode pesan agar sesuai format URL
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  if (isSuccess && submittedData) {
    return (
      <div className="animate-fade-in space-y-4 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h3 className="text-xl font-bold">Reservasi Berhasil!</h3>
        <p className="text-sm text-muted-foreground">
          Terima kasih, {submittedData.name}. Meja Anda kami siapkan pada{" "}
          {format(submittedData.date!, "d MMMM yyyy", { locale: id })} pukul{" "}
          {submittedData.time} WIB.
        </p>

        {/* Grup Tombol Aksi */}
        <div className="space-y-2 pt-2">
          <Button
            asChild
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <a
              href={generateGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarPlus className="mr-2 h-4 w-4" />
              Tambahkan ke Google Calendar
            </a>
          </Button>

          {/* 4. Tambahkan Tombol WhatsApp di sini */}
          <Button
            asChild
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Kirim Notifikasi ke WhatsApp
            </a>
          </Button>
        </div>

        <Button variant="ghost" onClick={onClose} className="w-full">
          Tutup
        </Button>
      </div>
    );
  }

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input
                  placeholder="Contoh: Budi Santoso"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telepon</FormLabel>
              <FormControl>
                <Input inputMode="tel" placeholder="081234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah Tamu</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: id })
                        ) : (
                          <span>Pilih tanggal</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className={cn("w-auto p-0", POPPER_Z_INDEX)}
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < todayStart}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Waktu</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jam kedatangan" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className={POPPER_Z_INDEX}>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot} WIB
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Mengirim..." : "Buat Reservasi"}
        </Button>
      </form>
    </Form>
  );
}
