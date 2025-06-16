"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

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

export default function ContactSection({
  instagramHandle = "@tongheelove",
  phone = "081282829139",
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
          <p className="text-lg text-muted-foreground mb-4">
            Siomay Asli Bandung Sejak {establishedYear}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Informasi & Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                  <img
                    src="https://img.icons8.com/3d-fluency/600/instagram-logo.png"
                    alt="Instagram"
                    className="h-6 w-6 object-contain"
                    aria-label="Instagram"
                  />
                  </div>
                  <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="font-medium">{instagramHandle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                  <span className="h-6 w-6 text-lg" role="img" aria-label="Telepon">📞</span>
                  </div>
                  <div>
                  <p className="text-sm text-muted-foreground">Telepon</p>
                  <p className="font-medium">{phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                  <span className="h-6 w-6 text-lg" role="img" aria-label="Lokasi">📍</span>
                  </div>
                  <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-medium">{location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <span className="h-6 w-6 text-primary font-bold text-lg">⏰</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jam Buka</p>
                    <p className="font-medium">{operatingHours}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <span className="h-6 w-6 text-primary font-bold text-lg">💳</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pembayaran</p>
                    <p className="font-medium">{paymentMethods.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() =>
                  window.open(
                    `https://wa.me/62${phone}?text=Halo, saya ingin menghubungi ${businessName}`,
                    "_blank",
                  )
                  }
                >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-green-500"
                  >
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.48 7.13L4 29l7.13-2.48A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.93 0-3.82-.56-5.43-1.61l-.39-.25-4.23 1.47 1.47-4.23-.25-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.22.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
                  </svg>
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
            Jangan lewatkan kesempatan untuk mencicipi siomay autentik dengan
            cita rasa khas Bandung sejak 1998. Pesan sekarang dan nikmati
            pengalaman kuliner yang tak terlupakan!
          </p>
          <Button
            size="lg"
            className="px-8"
            onClick={() =>
              window.open(
                `https://wa.me/62${phone}?text=Halo, saya ingin memesan siomay dari ${businessName}`,
                "_blank",
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
            <a
              href="https://wakhidpangestu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Wakhid Pangestu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
