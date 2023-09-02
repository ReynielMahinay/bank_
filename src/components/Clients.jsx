import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:mim-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain hover:brightness-200 hover:scale-125 hover:-translate-y-1   transition ease-in-out delay-150"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
