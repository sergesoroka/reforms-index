// @ts-nocheck
import React, { FC, useState } from "react";
import Image from "next/image";
import styles from "./Experts.module.css";
import Link from "next/link";

import ArrowRight from "components/IconsComponents/ArrowRight";
type ExpertInfo = {
  id: number;
  name: string;
  company: [];
  img?: string;
  position?: string;
  info?: string;
  specialization?: string;
  status?: number;
};

const ExpertCart: FC<ExpertInfo> = ({
  id,
  name,
  company,
  img,
  position,
  status,
  info,
  specialization,
}) => {
  const [isShown, setIsShown] = useState(false);

  const showFullCart = () => setIsShown(!isShown);

  return (
    <Link href={`/expert/${id}`}>
      <div className="flex flex-col items-center poiter gap-2">
        <Image
          // @ts-ignore
          src={img}
          alt={name}
          width={240}
          height={240}
          className="rounded-[40px] h-[240px] md:h-[240px]"
        />
        <div
          className="text-[18px] text-red-500 text-center mt-4 "
          style={{ color: "#ef4444" }}
        >
          {name} {name == "Олександр Жолудь" && <span>*</span>}
        </div>

        <div
          className="text-sm text-gray-700 mb-2 mt-0
         text-center"
        >
          {company[0].name}
        </div>
        <p>
          {name == "Олександр Жолудь" && (
            <span className={styles.note}>
              * Олександр не бере участь у оцінці нормативних актів, які мають
              відношення до діяльності НБУ
            </span>
          )}
        </p>
      </div>
    </Link>
  );
  // return (
  //   <div onClick={showFullCart}>
  //     {!isShown ? (
  //       <div className="flex flex-col items-center poiter">
  //         <Image
  //           // @ts-ignore
  //           src={img}
  //           alt={name}
  //           width={140}
  //           height={140}
  //           className="rounded-full h-[100px] md:h-[140px]"
  //         />
  //         <p className="text-[16px] text-gray-700 text-center mt-4 mb-2">
  //           {name} {name == "Олександр Жолудь" && <span>*</span>}
  //         </p>
  //         {/* <hr style={{ width: "100%" }} /> */}
  //         <p className="text-sm text-red-500 my-2 text-center">{company}</p>
  //         <p>
  //           {name == "Олександр Жолудь" && (
  //             <span className={styles.note}>
  //               * Олександр не бере участь у оцінці нормативних актів, які мають
  //               відношення до діяльності НБУ
  //             </span>
  //           )}
  //         </p>
  //       </div>
  //     ) : (
  //       <div className={styles.cartWrapExtended} onClick={showFullCart}>
  //         <div className={styles.cartNameExtended}>
  //           <Image
  //             // @ts-ignore
  //             src={img}
  //             alt={name}
  //             width={100}
  //             height={100}
  //             style={{ borderRadius: "100%", height: "100px" }}
  //           />
  //           <Link href={`/expert/${id}`}>
  //             <p className={styles.expertNameExtended}>
  //               {name} {name == "Олександр Жолудь" && <span>*</span>}
  //             </p>
  //           </Link>
  //         </div>
  //         <hr style={{ width: "100%", margin: "0.4rem 0" }} />
  //         <p className="text-sm text-red-500 my-2">{company}</p>
  //         {position && (
  //           <p className={styles.role}>
  //             <span className={styles.roleName}>Посада:</span> {position}
  //           </p>
  //         )}
  //         {specialization && status != 1 && (
  //           <p className={styles.role}>
  //             <span className={styles.roleName}>Спеціалізація:</span>{" "}
  //             {specialization}
  //           </p>
  //         )}
  //         <p>
  //           {name == "Олександр Жолудь" && (
  //             <span className={styles.note}>
  //               * Олександр не бере участь у оцінці нормативних актів, які мають
  //               відношення до діяльності НБУ
  //             </span>
  //           )}
  //         </p>
  //         {/* <p
  //           className={styles.disc}
  //           dangerouslySetInnerHTML={{ __html: info }}
  //         /> */}
  //         <Link href={`expert/${id}`}>
  //           {/* <div className="flex items-center gap-2 text-sm">
  //             <p>Повний профіль</p>
  //             <ArrowRight />
  //           </div> */}
  //         </Link>
  //         {/* <hr style={{ width: "100%", margin: "1rem 0" }} /> */}
  //       </div>
  //     )}
  //   </div>
  // );
};

export default ExpertCart;
