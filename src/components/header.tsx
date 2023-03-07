export default function Header() {
  return (
    <>
        <header className="flex justify-center">
          <div className="backdrop-blur-sm absolute w-full text-white py-4 px-6 rounded-md md:container md:w-full w-11/12 flex justify-between my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <h1 className="text-4xl font-bold">FindMe<span className="text-emerald-400">.</span></h1>
            
            <div className="flex md:hidden cursor-pointer flex-col items-center justify-center">
              <div className="rounded my-1" style={{ width: '36px', backgroundColor: 'white', height: '3px' }}></div>
              <div className="rounded my-1" style={{ width: '36px', backgroundColor: 'white', height: '3px' }}></div>
            </div>

            <div className="hidden md:flex items-center">
              <a href="/login" className=" mx-1 inline-block border-emerald-600 border-solid border-2 rounded px-8 py-2 text-xs font-semibold hover:shadow-emerald-600 hover:shadow transition">Entrar</a>
              <a href="/register" className="mx-1 inline-block border-emerald-600 hover:border-emerald-700 border-solid border-2 bg-emerald-600 rounded px-8 py-2 text-xs font-semibold hover:bg-emerald-700 hover:shadow-emerald-600 hover:shadow transition">Cadastre-se grátis</a>
            </div>

          </div>
        </header>
    </>
  )
}
