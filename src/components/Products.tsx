import React from "react";
import { ProductsContainer } from "../styles/components/Products.styles";
import { ButtonA } from "../styles/customButton";
import { Icon } from "semantic-ui-react";

const Products = (): JSX.Element => {
  return (
    <ProductsContainer>
      <div className="wrapper">
        <p className="Section-title">PRODUCT - LOREM IPSUM</p>
        <div className="product">
          <h1 className="title">Product1</h1>
          <div className="contents">
            <h3 className="description">At lorem est</h3>
            <p className="introduction">
              Nonumy elitr diam nonumy dolor justo tempor sit diam dolores sit.
              <p className="line-separator" />
              Ea tempor dolor dolor et rebum. Tempor lorem sanctus rebum elitr
              accusam erat sit diam lorem, nonumy ipsum eos clita eos accusam,
              sadipscing takimata eos lorem vero magna et ea diam takimata.
              <p className="line-separator" />
              Ipsum amet magna nonumy voluptua clita no consetetur tempor
              eirmod, at sed stet dolore dolor invidunt elitr eos takimata,
              sanctus rebum takimata sanctus diam ea.
              <p className="line-separator" />
              Sea eirmod voluptua ea rebum no, kasd diam ipsum sed stet labore
              at. Consetetur lorem at dolor erat, duo clita et duo ipsum est at
              dolores aliquyam tempor.
              <p className="line-separator" />
              Clita eos accusam eos.
            </p>
            <div className="buttons">
              <ButtonA href="/">
                <span>JOIN DISCORD</span>
                <Icon name="arrow right" className="button-arrow" />
              </ButtonA>
              <span className="separator" />
              <ButtonA href="/">
                <span>GET EMAIL UPDATE</span>
                <Icon name="arrow right" className="button-arrow" />
              </ButtonA>
            </div>
          </div>
        </div>

        <div className="product">
          <h1 className="title">Product2</h1>
          <div className="contents">
            <h3 className="description">Tempest the bleak</h3>
            <p className="introduction">
              Weary gave out flown help wretch was demons in, cushions i i his
              lamplight at in. Stern sitting spoken the nevermore horror what
              stayed.
              <p className="line-separator" />
              - Clita justo erat
              <br />
              - Justo erat clita
              <br />
              - Erat clita justro
              <p className="line-separator" />
              let and sitting spoken i countenance rapping chamber i memories.
              <p className="line-separator" />
              The muttered lenore of bosoms floor till shall human bleak.
            </p>
            <div className="buttons">
              <ButtonA href="/">
                <span>JOIN DISCORD</span>
                <Icon name="arrow right" className="button-arrow" />
              </ButtonA>
            </div>
          </div>
        </div>

        <div className="product">
          <h1 className="title">Product3</h1>
          <div className="contents">
            <h3 className="description">Versuch ein</h3>
            <p className="introduction">
              Nonumy elitr diam nonumy dolor justo tempor sit diam dolores sit.
              <p className="line-separator" />
              Ea tempor dolor dolor et rebum. Tempor lorem sanctus rebum elitr
              accusam erat sit diam lorem, nonumy ipsum eos clita eos accusam,
              sadipscing takimata eos lorem vero magna et ea diam takimata.
              <p className="line-separator" />
              Ipsum amet magna nonumy voluptua clita no consetetur tempor
              eirmod, at sed stet dolore dolor invidunt elitr eos takimata,
              sanctus rebum takimata sanctus diam ea.
              <p className="line-separator" />
            </p>
            <div className="buttons">
              <ButtonA color="inverted" href="/">
                <span>COMING SOON</span>
                <Icon name="arrow right" className="button-arrow" />
              </ButtonA>
            </div>
          </div>
        </div>
      </div>
    </ProductsContainer>
  );
};

export default Products;
