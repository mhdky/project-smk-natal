import { useState } from "react";
import Auth from "../components/Auth/Auth";
import ButtonSubmit from "../components/Button/ButtonSubmit";
import Input from "../components/Form/Input";
import Label from "../components/Form/Label";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassworDua, setShowPassworDua] = useState(false);

    const handleShowHidePass = () => {
        setShowPassword(!showPassword);
    }

    const handleShowHidePassDua = () => {
        setShowPassworDua(!showPassworDua);
    }

    return (
        <Auth>
            <Auth.ContainerAuth>
                {/* name */}
                <Auth.AuthLabel>
                    <Label labelFor='name'>Nama</Label>
                </Auth.AuthLabel>
                <Auth.ContainerAuthInput iconUrl='/img/icon/at.svg'>
                    <Input type='text' name='name' id='name'>Masukan Nama Lengkap Anda</Input>
                </Auth.ContainerAuthInput>

                {/* email */}
                <Auth.AuthLabel>
                    <Label labelFor='email'>Email</Label>
                </Auth.AuthLabel>
                <Auth.ContainerAuthInput iconUrl='/img/icon/at.svg'>
                    <Input type='email' name='email' id='email'>Masukan Email Anda</Input>
                </Auth.ContainerAuthInput>

                {/* password */}
                <Auth.AuthLabel>
                    <Label labelFor='password'>Password</Label>
                </Auth.AuthLabel>
                <Auth.ContainerAuthInput iconUrl='/img/icon/lock.svg'>
                    <Input type={showPassword ? 'text' : 'password'} name='password' id='password'>Masukan Password Anda</Input>
                    <Auth.ShowAndHidePassword onClick={handleShowHidePass} display={showPassword ? 'hidden' : 'block'} />
                </Auth.ContainerAuthInput>

                {/* konfirmasi password */}
                <Auth.AuthLabel>
                    <Label labelFor='confirm_password'>Confirm Password</Label>
                </Auth.AuthLabel>
                <Auth.ContainerAuthInput iconUrl='/img/icon/lock.svg'>
                    <Input type={showPassworDua ? 'text' : 'password'} name='confirm_password' id='confirm_password'>Konfirmasi Password Baru Anda</Input>
                    <Auth.ShowAndHidePassword onClick={handleShowHidePassDua} display={showPassworDua ? 'hidden' : 'block'} />
                </Auth.ContainerAuthInput>

                {/* register */}
                <ButtonSubmit paddingResponsive='px-6 py-2'>Register</ButtonSubmit>
            </Auth.ContainerAuth>

            {/* belum punya akun */}
            <Auth.AuthAction text='Sudah punya akun?' url='/login' textUrl='Login' />
        </Auth>
    );
}

export default Register;