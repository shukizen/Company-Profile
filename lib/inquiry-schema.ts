import { z } from "zod";

export const serviceInterests = [
  "Solusi AI",
  "Pengembangan Web",
  "Pengembangan Aplikasi Seluler",
  "Pengembangan Perangkat Lunak Khusus",
  "Lainnya",
] as const;

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Masukkan nama Anda.").max(100),
  email: z.string().trim().email("Masukkan alamat email yang valid.").max(254),
  serviceInterest: z.enum(serviceInterests),
  projectDescription: z.string().trim().min(10, "Ceritakan sedikit lebih banyak tentang proyek Anda.").max(5000),
  website: z.string().max(500).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
