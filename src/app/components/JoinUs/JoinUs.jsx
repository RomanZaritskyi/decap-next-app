"use client";
import useTranslation from "next-translate/useTranslation";

import Button from "../common/Button/Button";
import Trademark from "../../../../public/img/trademark.svg";
import Image from "next/image";

export default function JoinUs() {
  const { t } = useTranslation("home");
  return (
    <section className='join-us'>
      <div className='join-us-trademark'>
        <Image className='join-us-trademark-img' src={Trademark} alt='medium logo' />
        <div className='join-us-trademark-lettering'>
          <p className='join-us-trademark-title'>АКСЕЛЕРАТОР</p>
          <p className='join-us-trademark-subtitle'>Міністерство оборони України</p>
        </div>
      </div>

      <div className='join-us-info'>
        <h4 className='join-us-info-title'>Для зміцнення обороноздатності України у Вас є</h4>
        <ul className='join-us-info-list'>
          <li className='join-us-info-item'>Зріле рішення або проєкт</li>
          <li className='join-us-info-item'>Можливості посилити МО, ЗСУ</li>
          <li className='join-us-info-item'>
            Досвід і бажання долучитися до розвитку проєктів чи підрозділів МО
          </li>
        </ul>
        <div className='join-us-info-button'>
          <Button text={"Звернутись"} />
        </div>
      </div>
    </section>
  );
}
