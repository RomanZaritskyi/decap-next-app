import useTranslation from "next-translate/useTranslation";
import CardCorner, { CornerLocation } from "../common/CardCorner/CardCorner";

export default function AcceleratorTopCard({ cardNumber, title, description }) {
  const { t } = useTranslation("home");
  return (
    <div className='accelerator-top-card'>
      <CardCorner location={CornerLocation.topLeft} />
      <CardCorner location={CornerLocation.topRight} />
      <CardCorner location={CornerLocation.bottomRight} />
      <CardCorner location={CornerLocation.bottomLeft} />
      <div className='corner top-left'></div>
      <div className='corner bottom-right'></div>
      <div className='corner bottom-left'></div>
      <div className='dash'></div>
      <div className='number'>{cardNumber}</div>
      <div className='title'>{t(title)}</div>
      <div className='description'>{t(description)}</div>
    </div>
  );
}
