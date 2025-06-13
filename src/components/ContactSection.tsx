"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

interface ContactSectionProps {
  instagramHandle?: string;
  email?: string;
  phone?: string;
  location?: string;
  mapUrl?: string;
}

export default function ContactSection({
  instagramHandle = "@siomayalek",
  email = "siomayalek@gmail.com",
  phone = "+62 812 3456 7890",
  location = "Bandung, Indonesia",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311687449556!3d-6.9034443992538095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1651234567890!5m2!1sen!2sid",
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hubungi Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-medium">{instagramHandle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telepon</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281380319934?text=Halo, saya ingin menghubungi Siomay Alek`,
                      "_blank",
                    )
                  }
                >
                  <Instagram className="mr-2 h-5 w-5" />
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
                title="Lokasi Siomay Alek"
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
            cita rasa khas Bandung. Pesan sekarang dan nikmati pengalaman
            kuliner yang tak terlupakan!
          </p>
          <Button
            size="lg"
            className="px-8"
            onClick={() =>
              window.open(
                `https://wa.me/6281380319934?text=Halo, saya ingin memesan siomay dari Siomay Alek`,
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
            © {new Date().getFullYear()} Siomay Alek. Semua hak dilindungi.
          </p>
          <p className="mt-2">
            Dibuat dengan ❤️ oleh tim JabarMikro – Kuliner Nusantara Rasa Juara!
          </p>
        </div>
      </div>
    </section>
  );
}
