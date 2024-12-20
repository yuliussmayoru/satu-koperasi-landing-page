import React from "react";
import { ServicesCard } from "./servicesCard";
import Link from "next/link";
import { ArrowRightIcon, ChartBarIcon, CreditCardIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/16/solid";
import ServicesList from "./servicesList";

export default function ServicesSection() {
    return (
        <div className="pt-24">
            <div id="services-prompt" className="flex flex-col text-center items-center gap-8 p-8">
                <h1 className="font-bold text-[#007654]">Services</h1>
                <p className="text-3xl lg:text-4xl">Layanan Unggulan <br /> untuk Koperasi Modern</p>
                <p className="text-sm lg:text-lg">Solusi Digital Terintegrasi untuk Semua Kebutuhan Koperasi Anda</p>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:pr-40 lg:pl-40">
                    <ServicesCard 
                        src="/img/keanggotaan.svg"
                        alt="Keanggotaan"
                        title="Manajemen Keanggotaan"
                        description="Pantau dan kelola data anggota koperasi secara lengkap, termasuk informasi pribadi, status keanggotaan, dan riwayat aktivitas mereka."
                    />
                    <ServicesCard 
                        src="/img/simpan-pinjam.svg"
                        alt="Simpan Pinjam"
                        title="Sistem Simpan Pinjam"
                        description="Otomatisasi seluruh proses simpan pinjam, mulai dari pengajuan, persetujuan, hingga perhitungan bunga dan jadwal pembayaran."
                    />
                    <ServicesCard 
                        src="/img/pengelolaan-keuangan.svg"
                        alt="Keuangan"
                        title="Pengelolaan Keuangan Terpusat"
                        description="Kelola transaksi koperasi dengan mudah, lengkap dengan fitur pembukuan otomatis dan rekonsiliasi keuangan."
                    />
                    <ServicesCard 
                        src="/img/manajemen-dividen.svg"
                        alt="Manajemen Dividen"
                        title="Manajemen Dividen dan SHU"
                        description="Hitung dan distribusikan Sisa Hasil Usaha (SHU) secara otomatis kepada anggota sesuai dengan kontribusi mereka."
                    />
                    <ServicesCard 
                        src="/img/pelaporan-analitik.svg"
                        alt="Pelaporan dan Analitik"
                        title="Pelaporan dan Analitik"
                        description="Dapatkan laporan mendetail seperti laporan keuangan, aktivitas anggota, dan analisis performa koperasi dalam format yang mudah dipahami."
                    />
                    <ServicesCard 
                        src="/img/manajemen-koperasi.svg"
                        alt="Manajemen Usaha Koperasi"
                        title="Manajemen Usaha Koperasi"
                        description="Awasi dan optimalkan usaha koperasi seperti toko atau unit usaha lainnya dengan pencatatan stok dan laporan pendapatan."
                    />
                    <ServicesCard 
                        src="/img/point-of-sales.svg"
                        alt="Sistem Kasir"
                        title="Sistem Kasir (Point of Sales)"
                        description="Tersedia fitur kasir untuk unit usaha koperasi yang terintegrasi dengan inventaris dan laporan penjualan."
                    />
                    <ServicesCard 
                        src="/img/pembayaran-digital.svg"
                        alt="Integrasi Pembayaran Digital"
                        title="Integrasi Pembayaran Digital"
                        description="Permudah transaksi dengan anggota dan pelanggan melalui integrasi dengan payment gateway atau e-wallet."
                    />
                </div>
                <div className="grid justify-items-stretch grid-cols-1 lg:grid-cols-2 gap-8 pt-40 md:pr-20 md:pl-20 lg:pr-40 lg:pl-40">
                    <div className="justify-self-center">
                        <img src="/img/emang-emang.webp" alt="servicewoman" className="w-[50vh] rounded-xl shadow-xl" />
                    </div>
                    
                    <div className="">
                        <div className="">
                            <div className="flex flex-col gap-4 border-b border-[#78b6a4] pb-8">
                                <p className="font-bold text-[#007654]">Fokus pada Pemberdayaan Koperasi</p>
                                <p className="text-4xl">Capai Keunggulan Pengelolaan Melalui Metodologi Kami</p>
                                <Link href="/" className="flex items-center gap-2">Pelajari Lebih lanjut <ArrowRightIcon className="w-4 h-4" /></Link>
                            </div>
                            <div className="flex flex-col gap-4 pt-8">
                                <ServicesList
                                    title="Sederhanakan Manajemen Koperasi"
                                    description="Berdayakan koperasi Anda dengan alat untuk mengelola keanggotaan, catatan keuangan, dan operasional secara efisien. Dapatkan wawasan real-time untuk pengambilan keputusan yang lebih baik."
                                >
                                    <UserGroupIcon className="w-8 h-8 text-[#007654]" />
                                </ServicesList>
                                <ServicesList
                                    title="Perencanaan Keuangan yang Lebih Mudah"
                                    description="Capai kejelasan keuangan dengan pencatatan otomatis, pelacakan pinjaman, dan pengelolaan simpanan. Pastikan transparansi dan kepercayaan di antara anggota."
                                >
                                        <CreditCardIcon className="w-8 h-8 text-[#007654]" />
                                </ServicesList>
                                
                                <ServicesList
                                    title="Optimalkan Keterlibatan Anggota"
                                    description="Tingkatkan partisipasi anggota dengan fitur untuk pengumuman, voting, dan komunikasi yang mudah di seluruh level koperasi."
                                >
                                    <UsersIcon className="w-8 h-8 text-[#007654]" />
                                </ServicesList>
                                
                                <ServicesList
                                    title="Digitalisasi Operasional Koperasi"
                                    description="Automasi berbagai proses administrasi, mulai dari pencatatan transaksi hingga laporan tahunan, sehingga menghemat waktu dan tenaga."
                                >
                                    <ChartBarIcon className="w-8 h-8 text-[#007654]" />
                                </ServicesList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}