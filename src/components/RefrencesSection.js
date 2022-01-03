import React from "react";

import Toggle from "./Toggle";

import styled from "styled-components";
import { About } from "../styles";

//Animation
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../Animation";

import { useSelector } from "react-redux";

const RefrencesSection = () => {
  const language = useSelector((state) => state.layout.language);

  const [element, controls] = useScroll();

  return (
    <Ref variants={scrollReveal} animate={controls} ref={element}>
      <h2>{language === "no" ? "Referanser" : "Refrences"}</h2>

      <AnimateSharedLayout>
        <Toggle title="Zeipt, TheFactory Accelerator">
          <div className="description">
            <p className="ref_p">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </Toggle>

        <Toggle title={language === "no" ? "Andre" : "Others"}>
          <div className="description">
            <p className="ref_p">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
          </div>
        </Toggle>
        <Toggle title={language === "no" ? "Andre" : "Others"}>
          <div className="description">
            <p className="ref_p">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem."
            </p>
          </div>
        </Toggle>
        <Toggle title={language === "no" ? "Andre" : "Others"}>
          <div className="description">
            <p className="ref_p">
              "Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Ref>
  );
};

const Ref = styled(About)`
  margin-top: 10rem;
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .line {
    background: #757575;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;

export default RefrencesSection;
