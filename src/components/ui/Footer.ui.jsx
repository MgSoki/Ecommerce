import React from "react";
import { Wrapper } from ".";

const Footer = () => {
  return (
    <footer className="mt-8 bg-neutral-200">
      <Wrapper>
        <div className="py-4 flex flex-col justify-center items-center text-sm">
          © 2024: All right reserved!
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
