import Navbar from "./components/Nav/Navbar";
import Button from "./components/Button/Button";
import { Fragment } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ChooseUs from "./components/ChooseUs/Chooseus";


const Home = () => {
    return (
        <Fragment>
            <Navbar>
                <Button paddingResponsive='md:px-5 md:py-2'>Login</Button>
            </Navbar>

            <Container padding='px-0 md:px-8 lg:px-12'>
                <Header />
            </Container>

            <Container padding='px-0' width='xl-1365:w-full'>
                <ChooseUs>
                    <ChooseUs.FeaturedSection icon='/img/icon/keamanan.png' nameSection='Keamanan' unggul='Jangan Khawatir Tentang Kemanan Jaringan Teknisi Kami Mampu Melakukannya Untuk Anda' />
                    <ChooseUs.FeaturedSection icon='/img/icon/fleksibel.png' nameSection='Fleksibel' unggul='Anda Memiliki Masalah Untuk Jaringan Di Tempat Terpencil, Kami Siap Cukup Beritahu Kondisi Sekitar Anda' />
                    <ChooseUs.FeaturedSection icon='/img/icon/uang.png' nameSection='Biaya Rendah' unggul='Jangan Khawatir Soal Biaya Pesangan, Kami Memiliki Harga Yang Murah Tapi Berkualitas' />
                </ChooseUs>
            </Container>
        </Fragment>
    );
}

export default Home;