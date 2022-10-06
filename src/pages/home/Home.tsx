import { champions } from "@/data/champions";
import logo from "../../assets/images/logo.webp";
import rp from "../../assets/images/rp.png";
import esencia from "../../assets/images/esencia.webp";
import { useAuth } from "@/hooks/useAuth";
import { AuthContextType } from "@/context/auth/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type CardChampionProps = {
  name: string;
  rpg: number;
  gemas: number;
  image: string;
};

const Home = () => {
  const navigate = useNavigate();
  const { auth } = useAuth() as AuthContextType;

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <>
      <header>
        <nav className="flex items-center gap-10 px-10 py-4 border-b border-yellow-100">
          <img src={logo} alt="logo of league of legends" className="w-10" />
          <ul className="hidden  md:flex text-white font-bold gap-6">
            <li className="cursor-pointer hover:border-b hover:border-b-yellow-100 transition-all">
              <a href="#" className="text-yellow-50">
                FEATURED
              </a>
            </li>
            <li className="cursor-pointer hover:border-b hover:border-b-yellow-100 transition-all">
              <a href="#" className="text-yellow-50">
                CHAMPIONS
              </a>
            </li>
            <li className="cursor-pointer hover:border-b hover:border-b-yellow-100 transition-all">
              <a href="#" className="text-yellow-50">
                SKINS
              </a>
            </li>
            <li className="cursor-pointer hover:border-b hover:border-b-yellow-100 transition-all">
              <a href="#" className="text-yellow-50">
                ACCESSORIES
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="md:flex pl-10 pr-2 gap-6 mt-10">
        <aside className="mb-4">
          <nav className="flex flex-col gap-6">
            <ul className="text-white">
              <li className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p className="uppercase text-xl">champions</p>
              </li>
              <li className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p className="uppercase text-xl">eternals</p>
              </li>
              <li className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p className="uppercase text-xl">bundles</p>
              </li>
            </ul>
            <div>
              <div className="flex bg-black p-2 border border-yellow-100">
                <p className="text-white">search</p>
                <input type="text" className="bg-transparent" />
              </div>
              <div className="flex gap-1 mt-2">
                <input type="checkbox" name="" id="" />
                <p className="text-white">Show Owned</p>
              </div>
            </div>
            <div>
              <div>
                <select name="" id="" className="w-full p-2">
                  <option value="" className="text-white">
                    Releason Date
                  </option>
                </select>
              </div>
              <ul className="text-white mt-2">
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">Assasian</p>
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">Something</p>
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">Magic</p>
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">Marksman</p>
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">Support</p>
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">Tank</p>
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-lg">On Sale</p>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <section
          className="w-full h-[85vh] grid justify-center lg:grid-cols-2  
        xl:grid-cols-3 2xl:grid-cols-4 gap-4 overflow-y-scroll overflow-x-hidden p-4"
        >
          {champions.map((champion) => (
            <CardChampion key={champion.name} {...champion} />
          ))}
        </section>
      </section>
    </>
  );
};

const CardChampion = ({ name, rpg, gemas, image }: CardChampionProps) => {
  return (
    <div className="relative max-w-[25rem] border border-yellow-100 cursor-pointer">
      <img src={image} alt="" />
      <div className="absolute w-full bottom-0 text-white flex flex-col items-center ">
        <h2 className="text-center capitalize text-lg">{name}</h2>
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={rp} alt="" className="w-10" />
            <span className="px-2">{rpg}</span>
          </div>
          <div className="flex items-center">
            <img src={esencia} alt="" className="w-10" />
            <span className="px-2">{gemas}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
