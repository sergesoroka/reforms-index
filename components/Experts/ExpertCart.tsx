import React, { FC, useState } from "react";
import Image from "next/image";
import styles from "./Experts.module.css";

type ExpertInfo = {
  id: number;
  name: string;
  company: string;
  img?: string;
  position?: string;
  info?: string;
  specialization?: string;
};

const ExpertCart: FC<ExpertInfo> = ({
  id,
  name,
  company,
  img,
  position,
  info,
  specialization,
}) => {
  const [isShown, setIsShown] = useState(true);

  const showFullCart = () => setIsShown(!isShown);
  return (
    <div
    // onClick={showFullCart}
    >
      {!isShown ? (
        <div className="w-[240px] flex flex-col items-center poiter">
          <Image
            // @ts-ignore
            src={img}
            alt={name}
            width={140}
            height={140}
            className="rounded-full h-[140px]"
          />
          <p className="text-sm text-gray-700 my-8">{name}</p>
          <hr style={{ width: "100%" }} />
          <p className="text-sm text-red-500 my-8 text-center">{company}</p>
        </div>
      ) : (
        <div
          className={styles.cartWrapExtended}
          // onClick={showFullCart}
        >
          <div className={styles.cartNameExtended}>
            <Image
              // @ts-ignore
              src={img}
              alt={name}
              width={80}
              height={80}
              style={{ borderRadius: "100%" }}
            />
            <p className={styles.expertNameExtended}>{name}</p>
          </div>
          <hr style={{ width: "100%", margin: "1rem 0" }} />
          <p className={styles.expertCompanyExtended}>{company}</p>
          <p className={styles.role}>
            <span className={styles.roleName}>Посада:</span> {position}
          </p>
          <p className={styles.role}>
            <span className={styles.roleName}>Спеціалізація:</span>{" "}
            {specialization}
          </p>
          <p
            className={styles.disc}
            dangerouslySetInnerHTML={{ __html: info }}
          />
          <hr style={{ width: "100%", margin: "1rem 0" }} />
        </div>
      )}
    </div>
  );
};

export default ExpertCart;
