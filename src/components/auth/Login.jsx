import Input from "@/components/UIForm/Input"
import SubmitButton from "../UIForm/SubmitButton"
import AuthSwitcher from "../UIForm/AuthSwitcher"

export default function Login({ onSwitchToRegistration }) {
    return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                <div className="w-full bg-primar rounded-lg shadow-xl border md:my-20 sm:max-w-md xl:p-0 bg-gradient-to-br from-primary to-primary-dark border-primary-dark shadow-primary-dark z-10">
                    <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                            Sign in
                        </h1>
                        <div className="flex justify-center">
                            {/* @if ($errors->any())
                            <div className="w-full max-w-lg p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <ul className="list-disc pl-5 space-y-1">
                                    @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                            @endif
                            @if (session('status') == 'error')
                            <div className="w-full max-w-lg p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                {{ session('message') }}
                            </div>
                            @endif */}
                        </div>
                        <form className="space-y-4"  method="POST">
                            {/* @csrf */}
                            <Input content="Name" name="name" />
                            <Input content="Password" name="password" type="password" />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="remember" id="remember"/>
                                <label htmlFor="remember" className="text-white text-sm">Remember Me</label>
                            </div>
                            <SubmitButton content="Sign In" />
                            <AuthSwitcher content="Don't have an account?" switcher="Sign Up" onSwitch={onSwitchToRegistration}/>
                        </form>
                    </div>
                </div>
            </div>
    )
}