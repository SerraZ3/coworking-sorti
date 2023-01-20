import React from "react";
import {
  Container,
  FormContainer,
  FormContent,
  IframeContaner,
  InsideFormContainer,
} from "./styles";

const ContactForm: React.FC = () => {
  return (
    <FormContainer>
      <InsideFormContainer>
        <IframeContaner>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.587433809426!2d-39.27794908467808!3d-14.792253203045528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa5ee9603db7%3A0xf941644e60becd7f!2sCl%C3%ADnica%20Sorti!5e0!3m2!1spt-BR!2sbr!4v1674177893751!5m2!1spt-BR!2sbr"
            width="530"
            height="250"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </IframeContaner>
        <FormContent>
          <h1>ContactForm</h1>
        </FormContent>
      </InsideFormContainer>
    </FormContainer>
  );
};

export default ContactForm;
