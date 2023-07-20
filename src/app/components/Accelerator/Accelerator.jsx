"use client";
import useTranslation from "next-translate/useTranslation";

import AcceleratorBottomCard from "./AcceleratorBottomCard";
import AcceleratorTopCard from "./AcceleratorTopCard";
import { pastResultCards, presentResultCards, topAcceleratorCards } from "./acceleratorData";

export default function Accelerator() {
  const { t } = useTranslation("home");
  return (
    <section className='accelerator' id='accelerator'>
      <div className='accelerator-top'>
        <div className='accelerator-top-title'>
          <h2 className='accelerator-top-subtitle green-color'>
            ФУНКЦІЇ
            <span className='green-color'> АКСЕЛЕРАТОРА</span>
          </h2>
        </div>
        <div className='accelerator-top-cards'>
          {topAcceleratorCards.map((cart, index) => {
            return (
              <AcceleratorTopCard
                key={cart.cardNumber}
                cardNumber={cart.cardNumber}
                title={cart.title}
                description={cart.description}
              />
            );
          })}
        </div>
      </div>

      <div className='accelerator-bottom'>
        <h2 className='accelerator-bottom-title'>{t("accelerator.changes.title")}</h2>
        <div className='accelerator-bottom-statistic'>
          <div className='accelerator-bottom-col-names'>
            <div className='col-name'>{t("accelerator.changes.cards.past.title")}</div>
            <div className='col-name-empty'></div>
            <div className='col-name green-color'>
              {t("accelerator.changes.cards.present.title")}
            </div>
          </div>
          <div className='accelerator-bottom-cards'>
            <div className='cards-past-block'>
              {pastResultCards.map((card) => {
                return (
                  <AcceleratorBottomCard
                    key={card.cardNumber}
                    title={card.title}
                    description={card.description}
                  />
                );
              })}
            </div>
            <div className='cards-pointer-block'>
              <div className='pointer-wrapper'>
                <div className='pointer-visible'>
                  <div className='pointer-triangular'></div>
                </div>
                <div className='pointer-empty'></div>
              </div>
              <div className='pointer-wrapper'>
                <div className='pointer-visible'>
                  <div className='pointer-triangular'></div>
                </div>
                <div className='pointer-empty'></div>
              </div>
              <div className='pointer-wrapper'>
                <div className='pointer-visible'>
                  <div className='pointer-triangular'></div>
                </div>
                <div className='pointer-empty'></div>
              </div>
            </div>
            <div className='cards-present-block'>
              {presentResultCards.map((card) => {
                return (
                  <AcceleratorBottomCard
                    key={card.cardNumber}
                    title={card.title}
                    description={card.description}
                    withCorners={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
