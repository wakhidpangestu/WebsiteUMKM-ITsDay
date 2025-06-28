"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Komponen ContactSection dioptimasi untuk performa dan aksesibilitas
interface ContactSectionProps {
  instagramHandle?: string;
  phone?: string;
  location?: string;
  mapUrl?: string;
  businessName?: string;
  operatingHours?: string;
  paymentMethods?: string[];
  establishedYear?: string;
}

const ContactSection = memo(function ContactSection({
  instagramHandle = "@tongheelove",
  phone = "+6281282829139",
  location = "Halte Pondok Sukmajaya Permai",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9039192830187!2d106.84099467500086!3d-6.406377862655379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb002a9e3f5b%3A0xea1d25c55caeb03d!2sTransdepok%20Halte%20Pondok%20Sukmajaya!5e0!3m2!1sen!2sid!4v1749879357842!5m2!1sen!2sid",
  businessName = "Tong Hee Love",
  operatingHours = "10:00 - 19:00",
  paymentMethods = ["Cash", "QRIS", "Transfer"],
  establishedYear = "1998",
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hubungi Kami
        </h2>
        {/* Business Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {businessName}
          </h3>
          <p className="text-sm text-muted-foreground">
            Didirikan pada tahun {establishedYear}, kami telah melayani pelanggan setia dengan cita rasa otentik sejak lama.
          </p>
          <p className="text-lg text-muted-foreground mt-2 mb-4">
            Mau pesan siomay atau tanya-tanya?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="relative shadow-2xl rounded-2xl overflow-hidden bg-white/10 dark:bg-white/10 backdrop-blur-lg before:absolute before:inset-0 before:bg-white/10 before:opacity-100 before:rounded-2xl before:pointer-events-none after:absolute after:inset-0 after:bg-black/10 after:opacity-100 after:rounded-2xl after:pointer-events-none">
            <CardContent className="p-6 relative z-10">
              <h3 className="text-2xl font-semibold mb-6">
                Informasi & Kontak
              </h3>
              <div className="space-y-6">
                {/* Instagram */}
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg border border-white/30 backdrop-blur-sm">
                    <Image
                      src="https://img.icons8.com/3d-fluency/600/instagram-logo.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                      aria-label="Instagram"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-medium">{instagramHandle}</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg border border-white/30 backdrop-blur-sm">
                    <span
                      className="flex items-center justify-center h-6 w-6 text-lg rounded-full bg-transparent"
                      role="img"
                      aria-label="Telepon"
                    >
                      📞
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telepon</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg border border-white/30 backdrop-blur-sm">
                    <span
                      className="flex items-center justify-center h-6 w-6 text-lg rounded-full bg-transparent"
                      role="img"
                      aria-label="Lokasi"
                    >
                      📍
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
                {/* Operating Hours */}
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg border border-white/30 backdrop-blur-sm">
                    <span className="flex items-center justify-center h-6 w-6 text-lg rounded-full bg-transparent">
                      ⏰
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jam Buka</p>
                    <p className="font-medium">{operatingHours}</p>
                  </div>
                </div>
                {/* Payment Methods */}
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg border border-white/30 backdrop-blur-sm">
                    <span className="flex items-center justify-center h-6 w-6 text-lg rounded-full bg-transparent">
                      💳
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pembayaran</p>
                    <p className="font-medium">
                      {paymentMethods.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  className="w-full flex items-center justify-center gap-2 transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white shadow-lg"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `https://wa.me/62${phone}?text=Halo, saya ingin menghubungi ${businessName}`,
                      "_blank"
                    )
                  }
                >
                  <Image
                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                    aria-label="WhatsApp"
                    priority
                  />
                  Hubungi via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Map */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg overflow-hidden">
            <CardContent className="p-0 h-full min-h-[300px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                className="min-h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Lokasi ${businessName}`}
              />
            </CardContent>
          </Card>
        </div>
        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Menikmati Siomay Lezat?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk mencicipi siomay autentik dengan cita
            rasa khas Bandung sejak {establishedYear}. Pesan sekarang dan nikmati pengalaman
            kuliner yang tak terlupakan!
          </p>
          <Button
            size="lg"
            className="px-8"
            onClick={() =>
              window.open(
                `https://wa.me/62${phone}?text=Halo, saya ingin memesan siomay dari ${businessName}`,
                "_blank"
              )
            }
          >
            Pesan Sekarang
          </Button>
        </div>
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {businessName}. Semua hak dilindungi.
          </p>
          <p className="mt-2">
            Siomay Asli Bandung Sejak {establishedYear} – Kuliner Nusantara Rasa
            Juara!
          </p>
          <p className="mt-2">
            Copyright by{" "}
            <span className="underline hover:text-primary">Team JabarMikro</span>
          </p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Sponsored by</span>
            <Image
              src="/ITs-logo.png"
              alt="ITs Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
