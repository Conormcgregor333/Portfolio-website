export default function Tech() {
  return <a href="https://amaranth-joelly-62.tiiny.site" target="_blank" className={localStorage.getItem("theme")=="dark"?"block text-white  hover:text-orange-600 font-bold text-center text-xl mt-40":"block hover:text-orange-600 font-bold text-center text-xl mt-40"}>Click to view resume</a>;
}
