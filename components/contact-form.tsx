"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { inquirySchema, type InquiryInput } from "@/lib/inquiry-schema";

type InquiryValues = InquiryInput;

export function ContactForm() {
  const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({ resolver: zodResolver(inquirySchema) });

  const submit = async (values: InquiryValues) => {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Permintaan Anda belum dapat dikirim. Silakan coba lagi.");
      reset();
      setStatus({ kind: "success", message: result.message ?? "Terima kasih — permintaan Anda telah kami terima." });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Terjadi kesalahan. Silakan coba lagi.",
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="fullName">Nama lengkap <span>*</span></label>
          <input id="fullName" autoComplete="name" placeholder="Nama Anda" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} />
          {errors.fullName && <p className="field-error" id="fullName-error">{errors.fullName.message}</p>}
        </div>
        <div className="field">
          <label htmlFor="email">Alamat email <span>*</span></label>
          <input id="email" type="email" autoComplete="email" placeholder="nama@contoh.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
          {errors.email && <p className="field-error" id="email-error">{errors.email.message}</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="serviceInterest">Layanan yang diminati <span>*</span></label>
        <select id="serviceInterest" defaultValue="" aria-invalid={!!errors.serviceInterest} aria-describedby={errors.serviceInterest ? "service-error" : undefined} {...register("serviceInterest")}>
          <option value="" disabled>Pilih layanan</option>
          <option>Website company profile</option>
          <option>Landing page</option>
          <option>Website toko online</option>
          <option>Aplikasi web</option>
          <option>Lainnya</option>
        </select>
        {errors.serviceInterest && <p className="field-error" id="service-error">{errors.serviceInterest.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="projectDescription">Ceritakan proyek Anda <span>*</span></label>
        <textarea id="projectDescription" rows={5} placeholder="Apa yang ingin Anda buat atau tingkatkan?" aria-invalid={!!errors.projectDescription} aria-describedby={errors.projectDescription ? "description-error" : undefined} {...register("projectDescription")} />
        {errors.projectDescription && <p className="field-error" id="description-error">{errors.projectDescription.message}</p>}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Kosongkan kolom ini</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? <>Mengirim <LoaderCircle className="spin" size={17} /></> : <>Kirim permintaan <ArrowUpRight size={17} /> </>}
      </button>
      <p className="form-note">Informasi Anda hanya digunakan untuk menanggapi permintaan ini.</p>
      {status && (
        <p className={`form-status ${status.kind}`} role="status" aria-live="polite">
          {status.kind === "success" && <CheckCircle2 size={18} />}
          {status.message}
        </p>
      )}
    </form>
  );
}
