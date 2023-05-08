//import Image from "next/image";

const CardCarousel = ({ tipo, imagen, autor, fecha, titulo, detalles }) => {
  return (
    <>
      <div className={" w-[365px]  border-[0.5px] border-neutral-300  mx-3"}>
        <div className={"relative "}>
          <div
            className={
              "rounded-md px-[15px] py-[10px] absolute top-[30px] left-[30px] bg-[#0C5ADB] text-[10px] text-[#fff] "
            }
          >
            {tipo}
          </div>
          <img className={"w-full"} src={imagen} alt={"imagen"} />
        </div>
        <div className={"p-[25px] "}>
          <div className={"text-neutral-600 text-[15px] mb-[15px]"}>
            <a
              className={
                "pr-[10px] mr-[10px] border-r-[1px] border-neutral-500"
              }
              href={"/"}
            >
              {autor}
            </a>
            <a href={"/"}>{fecha}</a>
          </div>
          <a className={"text-[20px] leading-5 font-[600]"} href={"/"}>
            {titulo}
          </a>
          <p className={"text-neutral-600 text-[16px] font-[400] my-[20px]"}>
            {detalles}
          </p>
          <a
            className={"font-[600] tracking-[1px] text-[15px] text-black"}
            href={"/"}
          >
            {"Read More >"}
          </a>
        </div>
      </div>
    </>
  );
};
export default CardCarousel;
