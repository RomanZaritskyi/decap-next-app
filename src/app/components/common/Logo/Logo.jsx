import useTranslation from "next-translate/useTranslation";

import Image from "next/image";
import HeaderLogo from "../../../../../public/img/header_logo.png";

export default function Logo() {
  const { t } = useTranslation("home");
  return (
    <div className='logo'>
      <div className='logo-image'>
        <Image src={HeaderLogo} alt='header logo' />
      </div>
      <div className='logo-text'>
        <div className='logo-title'>АКСЕЛЕРАТОР</div>
        <div className='logo-subtitle'>Міністерство оборони України</div>
      </div>
    </div>
  );
}
