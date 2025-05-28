import Input from "@/components/UIForm/Input"
import SubmitButton from "../UIForm/SubmitButton"
import AuthSwitcher from "../UIForm/AuthSwitcher"

export default function Registrartion({ onSwitchToLogin }) {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:my-20 sm:max-w-2xl xl:p-0 bg-gradient-to-br from-primary to-primary-dark border-primary-dark shadow-primary-dark z-10">
                <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center">
                        Sign Up
                    </h1>
                    {/* <div class="flex justify-center">
                        @if ($errors->any())
                        <div class="w-full max-w-lg p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <ul class="list-disc pl-5 space-y-1">
                                @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                        @endif
                        @if (session('status') == 'error')
                        <div class="w-full max-w-lg p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            {{ session('message') }}
                        </div>
                        @endif
                    </div> */}
                    <form className="space-y-4" action="" method="POST">
                        {/* @csrf */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <Input content="Name" name="name" />
                            <Input content="Address" name="address" />
                            <Input content="Email" name="email" />
                            <Input content="Telephone" name="telephone" />
                            <Input content="Password" name="password" type="password" />
                            <Input content="Confirm Password" name="password_confirmation" type="password" />
                        </div>

                        <SubmitButton content="Sign Up" />
                        <AuthSwitcher content="Already have an account?" switcher="Sign In" onSwitch={onSwitchToLogin} />
                    </form>
                </div>
            </div>
        </div>
    )
}