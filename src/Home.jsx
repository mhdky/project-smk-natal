import Navbar from "./components/Nav/Navbar";
import Button from "./components/Button/Button";
import { Fragment } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ChooseUs from "./components/ChooseUs/Chooseus";
import ServicePackage from "./components/ServicePackage/ServicePackage";
import Footer from "./components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Navbar />

            <Container padding='px-0 md:px-8 lg:px-12'>
                <Header />
            </Container>

            <Container padding='px-0' width='xl-1365:w-full'>
                <ChooseUs>
                    <ChooseUs.FeaturedSection icon='/img/icon/keamanan.svg' nameSection='Keamanan' unggul='Jangan Khawatir Tentang Kemanan Jaringan Teknisi Kami Mampu Melakukannya Untuk Anda' />
                    <ChooseUs.FeaturedSection icon='/img/icon/fleksibel.svg' nameSection='Fleksibel' unggul='Anda Memiliki Masalah Untuk Jaringan Di Tempat Terpencil, Kami Siap Cukup Beritahu Kondisi Sekitar Anda' />
                    <ChooseUs.FeaturedSection icon='/img/icon/biaya.svg' nameSection='Biaya Rendah' unggul='Jangan Khawatir Soal Biaya Pesangan, Kami Memiliki Harga Yang Murah Tapi Berkualitas' />
                </ChooseUs>
            </Container>

            <Container>
                <ServicePackage>
                    <ServicePackage.CardService>
                        <ServicePackage.ServiceName>Berlangganan Per Tahun</ServicePackage.ServiceName>
                        <ServicePackage.Icon>{"/img/icon/diamond.svg"}</ServicePackage.Icon>
                        <ServicePackage.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia porro vero labore expedita et suscipit quos eos animi distinctio?</ServicePackage.Description>
                        <ServicePackage.Price>{(30000000).toLocaleString(('id-ID'), {styles: 'currency', currency:'IDR'})}</ServicePackage.Price>
                        <Button paddingResponsive='px-7 py-2 lg:px-10 lg:py-3' fontBold='font-bold'>Pilih</Button>
                    </ServicePackage.CardService>

                    <ServicePackage.CardService borderColor='border-yellow-400' marginTop='mt-16 md:mt-0' shadowColor='hover:shadow-yellow-300'>
                        <ServicePackage.Superior></ServicePackage.Superior>
                        <ServicePackage.ServiceName>Berlangganan Per 6 Bulan</ServicePackage.ServiceName>
                        <ServicePackage.Icon>{"/img/icon/medal.svg"}</ServicePackage.Icon>
                        <ServicePackage.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia porro vero labore expedita et suscipit quos eos animi distinctio?</ServicePackage.Description>
                        <ServicePackage.Price>{(20000000).toLocaleString(('id-ID'), {styles: 'currency', currency:'IDR'})}</ServicePackage.Price>
                        <Button bg='bg-yellow-400' paddingResponsive='px-7 py-2 lg:px-10 lg:py-3' fontBold='font-bold'>Pilih</Button>
                    </ServicePackage.CardService>

                    <ServicePackage.CardService>
                        <ServicePackage.ServiceName>Berlangganan Per 1 Bulan</ServicePackage.ServiceName>
                        <ServicePackage.Icon>{"/img/icon/3th.svg"}</ServicePackage.Icon>
                        <ServicePackage.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia porro vero labore expedita et suscipit quos eos animi distinctio?</ServicePackage.Description>
                        <ServicePackage.Price>{(10000000).toLocaleString(('id-ID'), {styles: 'currency', currency:'IDR'})}</ServicePackage.Price>
                        <Button paddingResponsive='px-7 py-2 lg:px-10 lg:py-3' fontBold='font-bold'>Pilih</Button>
                    </ServicePackage.CardService>
                </ServicePackage>

                <ServicePackage.Custom></ServicePackage.Custom>
            </Container>

            <Footer />
        </Fragment>
    );
}

export default Home;