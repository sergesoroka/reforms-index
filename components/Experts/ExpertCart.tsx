import React, { FC, useState } from "react";
import Image from "next/image";
import styles from "./Experts.module.css";

type ExpertInfo = {
  id: number;
  name: string;
  company: string;
  img?: string;
};

const ExpertCart: FC<ExpertInfo> = ({ id, name, company, img }) => {
  const [isShown, setIsShown] = useState(false);

  const showFullCart = () => setIsShown(!isShown);
  return (
    <div onClick={showFullCart}>
      {!isShown ? (
        <div className={styles.cartWrap}>
          <Image
            src={img}
            alt={name}
            width={140}
            height={140}
            className={styles.expertImg}
          />
          <p className={styles.expertName}>{name}</p>
          <hr style={{ width: "100%" }} />
          <p className={styles.expertCompany}>{company}</p>
        </div>
      ) : (
        <div className={styles.cartWrapExtended} onClick={showFullCart}>
          <div className={styles.cartNameExtended}>
            <Image
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
          <p className={styles.role}><span className={styles.roleName}>Посада:</span> Член редколегії</p>
          <p className={styles.role}><span className={styles.roleName}>Спеціалізація:</span> Урядування</p>
          <p className={styles.disc}>
            Гостьовий редактор «Вокс Україна», випускник бакалаврської програми
            «Філософія, політика, економіка» Оксфордського університету.
          </p>
          <hr style={{ width: "100%", margin: "1rem 0" }} />
          <p className={styles.comments}>Коментари</p>
        </div>
      )}
    </div>
  );
};

export default ExpertCart;
