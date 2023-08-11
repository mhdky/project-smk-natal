import { useState } from "react";
import Auth from "../components/Auth/Auth"
import Button from "../components/Button/Button";
import Input from "../components/Form/Input";
import Label from "../components/Form/Label";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleShowHidePass = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Auth>
            <Auth.ContainerAuth>
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
                    <Input onChange={(e) => setPassword(e.target.value)} value={password} type={showPassword ? 'text' : 'password'} name='password' id='password'>Masukan Password Anda</Input>
                    <Auth.ShowAndHidePassword onClick={handleShowHidePass} display={showPassword ? 'hidden' : 'block'} />
                </Auth.ContainerAuthInput>

                {/* login dan forgot password */}
                <Auth.ForgotPassword>
                    <Button paddingResponsive='px-6 py-2'>Login</Button>
                </Auth.ForgotPassword>
            </Auth.ContainerAuth>

            {/* belum punya akun */}
            <Auth.AuthAction text='Belum punya akun?' url='/register' textUrl='Register' />
        </Auth>
    );
}

export default Login