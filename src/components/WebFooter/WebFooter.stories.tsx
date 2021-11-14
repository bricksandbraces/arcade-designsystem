import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import WebFooter from "./WebFooter";

export default { title: "Web/A_REFA_WebFooter", decorators: [withKnobs] };

export const Default = () => {
  return (
    <WebFooter
      baseUrl={text("baseUrl", "#")}
      linkItems={object("linkItems", [
        { href: "#", label: "Imprint" },
        { href: "#", label: "Legal" },
        { href: "#", label: "Cookies" },
        { href: "#", label: "Privacy" },
        { href: "#", label: "Contact" }
      ])}
      description={text(
        "description",
        "Wir nutzen Cookies, um deine Experience zu verbessern. Deine Einstellungen kannst du jederzeit in den Einstellungen ändern."
      )}
      descriptionLink={object("descriptionLink", {
        href: "#",
        label: "Zu den Cookieeinstellungen"
      })}
    />
  );
};
