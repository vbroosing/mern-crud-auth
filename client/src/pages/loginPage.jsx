// import { useForm } from 'react-hook-form';
// import { loginRequest } from '../api/auth.js';

// import { login } from "../../../src/controllers/auth.controller.js"

// function loginPage (){

//     const { login, handleSubmit } = useForm();

//     return (
//         <div>
//             <form 
//             className='bg-zinc-600 max-w-md p-10 rounded-ms'
//             onSubmit={handleSubmit( async (values) => {
//                 console.log(values);
//                 const res = await loginRequest(values);
//             })}
//             >
//             {/* http://localhost:5173/register?username=&email=&password= */}
//                 <input type="email" {...login('email', { required: true })}
//                     className='w-full bg-white text-zinc-700 px-4 py-2 rounded-md shadow-lg  my-1'
//                     placeholder="email"
//                 />
//                 <input type="password" {...login('password', { required: true,  })}
//                     className='w-full bg-white text-zinc-700 text- px-4 py-2 rounded-md shadow-lg  my-1'
//                     placeholder="password"
//                 />

//                 <button className='w-full bg-zinc-800 border-slate-300 px-2 py-2 rounded-md shadow-lg ' type="submit">Registrarse</button>
//             </form>

//         </div>
//     );
// } 

// export default loginPage

function loginPage (){
    return (
        <div>Login Page</div>
    )
}
export default loginPage