import jonia from "../../assets/images/jonia.webp";
import logo from "../../assets/images/logo.webp";
import tirador from "../../assets/images/tirador.webp";

const Home = () => {
  return (
    <div className="">
      <img src={jonia} alt="" className="absolute h-screen blur-sm" />
      <div className="relative">
        <header>
          <nav className="flex items-center gap-10 px-10 pt-4">
            <img src={logo} alt="logo of league of legends" className="w-14" />
            <ul className="flex text-white font-bold gap-6 text-2xl">
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">Studios</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex justify-between mt-20 px-10">
          <div className="w-full  text-white relative">
            <h1 className="text-7xl text-center">
              <span className="text-lg">EL VIRTUOSO</span> <br />
              JHIN
            </h1>

            <div className=" p-10">
              <div className="flex gap-20 text-center justify-center items-center ">
                <div className="flex flex-col items-center">
                  <img src={tirador} alt="" className="w-12" />
                  <p>ROL</p>
                  <span className="text-yellow-400">TIRADOR</span>
                </div>
                <div>
                  <p>DIFICULTAD</p>
                  <span className="text-yellow-400">MODERADA</span>
                </div>
              </div>
              <div>
                <p className="text-xl mt-6">
                  Jhin es un meticuloso criminal psicópata que ve el asesinato
                  como arte. Otrora prisionero jonio, fue liberado gracias a los
                  sombríos tejemanejes del consejo de Jonia. Ahora, el asesino
                  en serie trabaja como sicario de la secta. Con su pistola como
                  pincel, la obra de Jhin muestra un arte brutal, tanto para las
                  víctimas como para los espectadores. Encuentra un cruel placer
                  en la escenificación atroz, lo cual lo convierte en un
                  candidato sin igual para mandar el más poderoso de los
                  mensajes: el terror.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/77ba0138-bccf-4d19-ad78-1b049b2d741b/dewot7a-ccd5989b-3c06-499e-a946-a4d5108f9ca7.png"
            alt=""
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
