import { RiDownloadLine } from "react-icons/ri";
import React from 'react';

const DownloadButton = () => {
  return (
    <a href="/assits/pdf/CV Ali mehtab.pdf"  data-aos="fade-left" download="/assits/pdf/CV Ali mehtab.pdf">
        <button className='new-button  w-[45%] ' >Download <RiDownloadLine /> </button>
    </a>
  );
};

export default DownloadButton;
