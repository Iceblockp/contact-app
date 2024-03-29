import React, { useEffect, useState } from "react";

import { getContactData } from "../service/contact.service";
import { ContactCardComponent, LoadingComponent } from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, []);

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center ">
      {items.loading ? (
        <LoadingComponent />
      ) : (
        <>
        {items.error ? (
          <h1>{items.error}</h1>
        ):(items.data.map(i => <ContactCardComponent data={i} key={i.id} ></ContactCardComponent>))}
        </>
      )}
    </div>
  );
};

export default ContactPage;
