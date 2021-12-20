import React from "react";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";
import Ticker from "react-ticker";

export type WordItem = {
  /**
   * WordItem Label
   */
  label: string;
};

export type WordBandProps = {
  /**
   * WordBand ClassName
   */
  className?: string;

  /**
   * WordBand Words
   */
  words?: WordItem[];
};

const WordBand = (
  { words = [{ label: "Innovation" }, { label: "Design" }] }: WordBandProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  const indexedWordItems = idfy(words);
  return (
    <section className={`${prefix}--wordband`} ref={ref}>
      <Ticker speed={3} direction="toRight" mode="chain" offset="100%">
        {(index) => (
          <p className={`${prefix}--wordband-words`}>
            {indexedWordItems?.map((word) => {
              return <span>{word.label}&nbsp;/&nbsp;</span>;
            })}
          </p>
        )}
      </Ticker>
    </section>
  );
};

export default React.forwardRef(WordBand);
