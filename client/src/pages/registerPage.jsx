import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth.js';

function registerPage (){

    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form 
            className='bg-zinc-600 max-w-md p-10 rounded-ms'
            onSubmit={handleSubmit( async values => {
                console.log(values);
                const res = await registerRequest(values);
            })}
            >
            {/* http://localhost:5173/register?username=&email=&password= */}
                <input type="text" {...register('username', { required: true })}
                    className='w-full bg-white text-zinc-700 px-4 py-2 rounded-md shadow-lg  my-1'
                    placeholder="username"
                    />
                <input type="email" {...register('email', { required: true })}
                    className='w-full bg-white text-zinc-700 px-4 py-2 rounded-md shadow-lg  my-1'
                    placeholder="email"
                />
                <input type="password" {...register('password', { required: true,  })}
                    className='w-full bg-white text-zinc-700 text- px-4 py-2 rounded-md shadow-lg  my-1'
                    placeholder="password"
                />

                <button className='w-full bg-zinc-800 border-slate-300 px-2 py-2 rounded-md shadow-lg ' type="submit">Registrarse</button>
            </form>

        </div>
    );
} 

export default registerPage