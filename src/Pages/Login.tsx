import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusLogin, setStatusLogin] = useState(false);

  
  const handleSubmit = () => {
    console.log('Login:', { email, password });
  };

  return (
    <main className="w-full flex flex-row h-screen bg-black">
      <section className="w-full lg:w-1/2 flex justify-center items-center flex-col px-6 lg:px-16 bg-black">
        <div className="w-full max-w-md">
          <img src="../../img/MJCinema-SinFondo.png" className='w-70 relative  pb-6 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]'/>

          <div className="w-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              {statusLogin ? "Crea tu cuenta" : "Bienvenido de vuelta"}
            </h1>
            <p className="text-gray-400 mb-8">
              {statusLogin ? "Únete y disfruta del mejor contenido" : "Ingresa tus credenciales para continuar"} 
            </p>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-lg py-3 pl-11 pr-12 focus:outline-none focus:border-red-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            
            {statusLogin ? (
              null
            ):(
              <div className="mb-6 text-right">
                <a
                  href="#"
                  className="text-red-500 text-sm hover:text-red-400 transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}
            

            <button
              onClick={handleSubmit}
              className={`w-full ${statusLogin ? "mt-8" : null} cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2`}
            >
              {statusLogin ? "Crea tu cuenta" : "Inicia Sesión"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-gray-400">o continúa con</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center cursor-pointer justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 py-3 px-4 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center cursor-pointer justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 py-3 px-4 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                  Apple
                </button>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              ¿No tienes cuenta?{' '}
              <button onClick={() => setStatusLogin(prev => !prev)} className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <div 
        className="absolute left-1/2 top-0 h-full w-32 
          bg-linear-to-r from-black to-transparent 
          z-20 pointer-events-none" 
      />

      <div className="hidden lg:block relative w-1/2 h-screen overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(../../img/backgrounds/login.webp)',
          }}
        />
        
        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-br from-red-900/30 via-transparent to-transparent"></div>

        <div className="relative z-10 flex flex-col ml-6 justify-center h-full px-12 xl:px-20 text-white">
          <div className="max-w-xl">
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Miles de películas{' '}
              <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">te esperan</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              Accede al catálogo más completo de cine. Desde clásicos atemporales hasta los estrenos más recientes.
            </p>

            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-bold text-red-500">10K+</div>
                <div className="text-sm text-gray-400 mt-1">Películas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500">4K</div>
                <div className="text-sm text-gray-400 mt-1">Ultra HD</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500">0</div>
                <div className="text-sm text-gray-400 mt-1">Anuncios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;