import useTranslation from "next-translate/useTranslation";
import CardCorner from "../common/CardCorner/CardCorner";
import { CornerLocation } from "../common/CardCorner/CardCorner";

export default function AcceleratorBottomCard({ title, description, withCorners = false }) {
  const { t } = useTranslation("home");
  return (
    <div className='accelerator-bottom-card'>
      <div className='content'>
        {title}
        {withCorners && <CardCorner color='active' location={CornerLocation.topLeft} />}
        {withCorners && <CardCorner color='active' location={CornerLocation.topRight} />}
        {withCorners && <CardCorner color='active' location={CornerLocation.bottomRight} />}
        {withCorners && <CardCorner color='active' location={CornerLocation.bottomLeft} />}
      </div>

      <div className='description'>{t(description)}</div>
    </div>
  );
}
