import { useRouter } from "next/router";
import { ReactElement, ReactNode, useState } from "react";
import Image from "next/image";
import { useLoginUserMutation } from "@/util/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const router = useRouter();
    const [loginUser,{isLoading,error}] = useLoginUserMutation();
    const [form,setForm] = useState({email:'',password:''});
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        try {
            const response = await loginUser(form).unwrap();
            if(response.redirectUrl){
                router.push('/');
            }
        } catch (error) {
            console.error('login false',error);
        }
    }

    return (
       <div className="p-login">
        <div className="p-login__container"> 
        <div className ="p-login__container__left">
            <div className="p-login__container__left__image">
                <Image
                    src=""
                    alt="login"
                    width={500}
                    height={500}
                    ></Image>
            </div>
            <div className="p-login__container__left__text">
                <h1>Chào mừng bạn đến với T Man</h1>
                <p>Đăng nhập để trải nghiệm những điều tuyệt vời nhất</p>
            </div>
        </div>
        <div className="p-login__container__right">
            <div className="p-login__container__right__form">
                <h1>Đăng nhập</h1>
                <div className="p-login__container__right__form__input">
                    <input type="text" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Tên đăng nhập" />
                    <input type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} placeholder="Mật khẩu" />
                </div>
                <button onClick={handleSubmit} disabled={isLoading}>Đăng nhập</button>
                {error && <p style={{color:'red'}}>Login false</p>}
            </div>
        </div>
       </div>
       </div>
    );
};
Login.getLayout = function getLayout(page: ReactElement): ReactNode 
{
    return <>{page}</>
}
export default Login;